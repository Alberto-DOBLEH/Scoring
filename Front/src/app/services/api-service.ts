import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = apiUrl;

  constructor(private http: HttpClient) {}
  //POST: Crear una nueva alternativa
  enviarDatosAlternativas(payload: any) {
    return this.http.post(`${this.baseURL}/createalternativa`, payload);
  }
  //POST: Crear un nuevo criterio
  enviarDatosCriterios(payload: any) {
    return this.http.post(`${this.baseURL}/createcriterio`, payload);
  }
}