import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }
  helloWorld() {
    return this.http.get('http://127.0.0.1:3000/');
  }
}
