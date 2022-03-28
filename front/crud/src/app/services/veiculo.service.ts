import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Veiculo } from '../models/veiculo.model';

const url = 'https://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(url);
  }
  get(id: any): Observable<Veiculo> {
    return this.http.get(`${url}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
