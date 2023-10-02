import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoPart } from './IAutoPart';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
    private baseUrl = 'http://localhost:8080/autoparts'

    constructor(private http:HttpClient) { }

    getAllAutoParts(): Observable<AutoPart[]> {
        return this.http.get<AutoPart[]>(`${this.baseUrl}/all`);
    }

    getAutoPartsByFilter(name:string, maxPrice: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/all`, { params: { name } })
    }
}
