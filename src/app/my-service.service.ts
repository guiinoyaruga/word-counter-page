import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url: string = 'http://localhost:4200'

  constructor(private http: HttpClient) { }

  buscarUsuario(id: number) {
    return this.http.get(`${this.url}/users/${id}`)
  }

  buscarListagemUsuarios() {
    return this.http.get(`${this.url}/users`)
  }

  criarNovoUsuario(user: {}){
    return this.http.post(`${this.url}/users`, user)
  }

  editarUsuario(id: number, user: {}){
    return this.http.put(`${this.url}/users/${id}`, user)
  }

  excluirUsuario(user: {}){
    return this.http.delete(`${this.url}/users`, user)
  }
}
