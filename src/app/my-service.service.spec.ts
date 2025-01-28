import { TestBed } from '@angular/core/testing';
import { MyServiceService } from './my-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MyServiceMock extends MyServiceService{
  response: any = [{
    id: 1,
    nome: 'Carlos',
    idade: 25
  }]

 override getData (){
  return of (this.response)
  }
}


describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: MyServiceService,
        useClass: MyServiceMock
      }]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should get data', () => {
    const response = [{
      id: 1,
      nome: 'Carlos',
      idade: 25
    }]
    service.getData().subscribe(res => {
      expect(res).toEqual(response)
    })
  });
});
