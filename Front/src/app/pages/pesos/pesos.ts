import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';

interface Criterio {
  id: number;
  descripcion: string;
  peso?: number;
}

@Component({
  selector: 'app-pesos',
  templateUrl: './pesos.html',
  styleUrls: ['./pesos.css']
})
export class PesosPage implements OnInit {
  criterios: Criterio[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    
    const idProyecto = 1; 
    this.apiService.getcriterio(idProyecto).subscribe((data: Criterio[]) => {
      this.criterios = data;
    });
  }

  guardarPesos() {
    const incompletos = this.criterios.some(
      (c) => c.peso === undefined || c.peso === null
    );

    if (incompletos) {
      alert('Debes llenar todos los pesos antes de guardar');
      return;
    }

    const total = this.criterios.reduce((sum, c) => sum + (c.peso || 0), 0);
    if (total !== 100) {
      alert('La suma de los pesos debe ser exactamente 100 (actual: ' + total + ')');
      return;
    }

    this.apiService.savePonderaciones(this.criterios).subscribe({
      next: () => {
        alert('Pesos guardados correctamente');
      },
      error: (err: unknown) => {
        console.error(err);
        alert('Error al guardar los pesos');
      }
    });
  }
}
