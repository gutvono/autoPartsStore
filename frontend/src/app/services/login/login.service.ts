import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private baseUrl = 'http://localhost:8080/login'

  constructor(private http: HttpClient) { }

  loginPost(credencials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/permission`, credencials)
  }
}
