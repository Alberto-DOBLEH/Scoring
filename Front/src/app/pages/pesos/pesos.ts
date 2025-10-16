import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-pesos',
  standalone: true,
  templateUrl: './pesos.html',
  styleUrls: ['./pesos.css'],
  imports: [CommonModule, FormsModule],
})
export class PesosPage {
  idProyecto: number = 0;
  idCriterio: number = 0;
  peso: number = 1;
  criterios: any[] = [];

  constructor(private apiService: ApiService) {}

  // 🔹 Cargar todos los criterios del proyecto seleccionado
  cargarPesos() {
    if (!this.idProyecto) {
      alert('Por favor ingrese el ID del proyecto para cargar los criterios.');
      return;
    }

    this.apiService.getcriterio(this.idProyecto).subscribe({
      next: (data: any) => {
        this.criterios = Array.isArray(data) ? data : [data];
        console.log('Criterios cargados:', this.criterios);
      },
      error: (err) => {
        console.error('Error al cargar los criterios:', err);
        alert('No se pudieron cargar los criterios ');
      },
    });
  }

  // 🔹 Actualizar el peso de un criterio
  guardarPesos() {
    if (!this.idCriterio || !this.peso) {
      alert('Debe ingresar el ID del criterio y un peso válido antes de guardar.');
      return;
    }

    const datos = {
      id_criterio: this.idCriterio,
      ponderacion: this.peso,
    };

    this.apiService.editcriterio(datos).subscribe({
      next: (res: any) => {
        console.log('Peso actualizado:', res);
        alert('Peso actualizado correctamente ');
        // Opcional: recargar criterios para ver el cambio reflejado
        this.cargarPesos();
      },
      error: (err) => {
        console.error('Error al actualizar el peso:', err);
        alert('Error al actualizar el peso ');
      },
    });
  }
}
