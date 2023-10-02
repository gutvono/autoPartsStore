import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    private baseUrl = 'http://localhost:8080/register'

  constructor(private http: HttpClient) { }

  registerPost(credencials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/permission`, credencials)
  }
}
