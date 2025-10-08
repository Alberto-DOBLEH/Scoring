import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../config/api-config';
import { Observable } from 'rxjs';

// Interfaz para proyectos
export interface Proyecto {
  id_proyecto?: number;
  nombre: string;
  descripcion?: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = apiUrl;

  constructor(private http: HttpClient) {}
  //POST: Crear un nuevo proyecto
  enviarDatosProyectos(proyecto: Proyecto): Observable<any> {
    return this.http.post(`${this.baseURL}/createproyecto`, proyecto);
  }

  //GET: Obtener un proyecto por su id
  getProyecto(id_proyecto: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.baseURL}/getproyecto/${id_proyecto}`);
  }

  obtenerTodosProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.baseURL}/getproyecto`);
  }

  //UPDATE: Modificar un proyecto
  editarProyecto(proyecto: Proyecto): Observable<Proyecto[]> {
    return this.http.put<Proyecto[]>(`${this.baseURL}/editproyecto`, proyecto);
  }

  //DELETE: Eliminar un proyecto
  eliminarProyecto(id_proyecto: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(`${this.baseURL}/deleteproyecto/${id_proyecto}`);
  }

  //POST: Crear una nueva alternativa
  enviarDatosAlternativas(payload: any) {
    return this.http.post(`${this.baseURL}/createalternativa`, payload);
  }
  //POST: Crear un nuevo criterio
  enviarDatosCriterios(payload: any) {
    return this.http.post(`${this.baseURL}/createcriterio`, payload);
  }
  //GET: Obtener la ponderación de un criterio por su ID
  getcriterio(id_proyecto: number) {
    return this.http.get<any>(`${this.baseURL}/getcriterio/${id_proyecto}`);
  }
  //GET: Obtener los valores de satisfacción por su ID
  getsatisfaccion(id_proyecto: number) {
    return this.http.get<any>(`${this.baseURL}/getsatisfaccion/${id_proyecto}`);
  }
}
