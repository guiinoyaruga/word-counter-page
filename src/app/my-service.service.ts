import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url = 'http://localhost:4200'

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.url}/users`)
  }
}
