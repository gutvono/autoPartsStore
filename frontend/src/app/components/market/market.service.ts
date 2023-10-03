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

    getAutoPartsByCategoryFilter(category: string): Observable<AutoPart[]> {
        return this.http.get<AutoPart[]>(`${this.baseUrl}/search`, { params: { category } })
    }
}
