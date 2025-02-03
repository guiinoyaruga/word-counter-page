import { TestBed } from '@angular/core/testing';
import { MyServiceService } from './my-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';

// class MyServiceMock extends MyServiceService {
//   response: any = [{
//     id: 1,
//     nome: 'Carlos',
//     idade: 25
//   }]

//   override buscarUsuario(id: number) {
//     return of(this.response)
//   }
// }

describe('MyServiceService', () => {
  let service: MyServiceService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: MyServiceService,
        // useClass: MyServiceMock,
      }]
    });
    service = TestBed.inject(MyServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should get data', () => {
    const id = 1
    const response = [{
      id: 1,
      nome: 'Carlos',
      idade: 25
    }]

    service.buscarUsuario(id).subscribe(res => {
      expect(res).toBe(response)
    })
  });

  it('should get a user ID', () => {
    let id = 2;
    let userId = [{
      id: 2,
      nome: 'Carlos',
      idade: 20,
    }]

    service.buscarUsuario(id).subscribe(res => {
      expect(res).toBe(userId)
    })

    const request = httpTestingController.expectOne((req) => req.url === `${service.url}/users/${id}`);

    request.flush(userId)
    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${service.url}/users/${id}`)
  });

  it('should get a user list', () => {
    const usersList = [{
      id: 1,
      nome: 'Dablio',
      idade: '18'
    }, {
      id: 2,
      nome: 'Tê',
      idade: '25'
    }]

    service.buscarListagemUsuarios().subscribe(req => {
      expect(req).toBe(usersList)
    })

    const request = httpTestingController.expectOne((req) => req.url === `${service.url}/users`);

    request.flush(usersList)
    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${service.url}/users`)
  });

  it('should return a http error 500', () => {
    service.buscarListagemUsuarios().subscribe({
      error: (erro) => {
        expect(erro.status).toEqual(500)
      }
    })

    const request = httpTestingController.expectOne((req) => req.url === `${service.url}/users`);

    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${service.url}/users`)

    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede'
    })

  });

  it('should can make a POST', () => {
    const user = [{id: 1, nome: 'gui', idade: 20}]
    const response = [{id: 1, nome: 'gui', idade: 20}]

    service.criarNovoUsuario(user).subscribe(req => {
      expect(req).toBe(response)
    })

    const request = httpTestingController.expectOne((req) => req.url === `${service.url}/users`);

    expect(request.request.method).toBe('POST')
    expect(request.request.url).toBe(`${service.url}/users`)
    request.flush(response)
  });
  
  it('should can make a PUT', () => {
    const id = 1
    const user = [{ nome: 'gui', idade: 20}]
    const response = [{ nome: 'gui', idade: 20}]

    service.editarUsuario(id,user).subscribe(req => {
      expect(req).toBe(response)
    })

    const request = httpTestingController.expectOne((req) => req.url === `${service.url}/users/${id}`);

    expect(request.request.method).toBe('PUT')
    expect(request.request.url).toBe(`${service.url}/users/${id}`)
    request.flush(response)
  }); 

  it('should can make a DELETE', () => {
    const id = 1
    const response = {}

    service.deletarUsuario(id).subscribe(req => {
      expect(req).toBe(response)
    })

    const request = httpTestingController.expectOne((req) => req.url === `${service.url}/users/${id}`);

    expect(request.request.method).toBe('DELETE')
    expect(request.request.url).toBe(`${service.url}/users/${id}`)
    request.flush(response)
  }); 
})