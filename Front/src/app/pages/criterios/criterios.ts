import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'page-criterios',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './criterios.html',
  styleUrls: ['./criterios.css']
})
export class CriteriosPage {
  criterio = {
    id_proyecto: '',
    id_criterio: '',
    nombre: '',
    descripcion: '',
    ponderacion: 3
  };

  criterios: any[] = [];

  constructor(private apiService: ApiService) {}

  guardarCriterio() {
    this.apiService.enviarDatosCriterios(this.criterio).subscribe({
      next: (response) => {
        console.log('Criterio guardado:', response);
        alert('Criterio guardado exitosamente');
      },
      error: (err) => {
        console.error('Error al guardar el criterio:', err);
        alert('Ocurrió un error al guardar el criterio');
      }
    });
  }

  mostrarPonderacion() {
    this.apiService.getcriterio(1).subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.criterios = data;
        this.criterios = Array.isArray(data) ? data : [data];
      },
      error: (err) => {
        console.error('Error al obtener la ponderación:', err);
        alert('Ocurrió un error al obtener la ponderación');
      }
    });
  }
}
