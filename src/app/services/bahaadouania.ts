import { Injectable } from '@angular/core';
import { Batiment } from '../models/batiment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class batimentbahaadouaniaService {
  private apiUrl = 'http://localhost:3000/batiments';

  constructor(private http: HttpClient) {}

  getBatiments(): Observable<Batiment[]> {
    return this.http.get<Batiment[]>(this.apiUrl);
  }

  getBatiment(id: number): Observable<Batiment> {
    return this.http.get<Batiment>(`${this.apiUrl}/${id}`);
  }

  addBatiment(batiment: Batiment): Observable<Batiment> {
    return this.http.post<Batiment>(this.apiUrl, batiment);
  }

  updateBatiment(batiment: Batiment): Observable<Batiment> {
    return this.http.put<Batiment>(`${this.apiUrl}/${batiment.id}`, batiment);
  }

  deleteBatiment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}