import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Veiculo } from '../models/veiculo.model';

const url = 'http://localhost:8080/api'

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${url}/veiculos`);
  }
  get(id: any): Observable<Veiculo> {
    return this.http.get(`${url}/veiculo/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(`${url}/inserir`, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/alterar/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/remover/${id}`);
  }
}
