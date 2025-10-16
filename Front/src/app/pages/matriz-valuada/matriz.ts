import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'page-matriz-valuada',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './matriz.html',
  styleUrls: ['./matriz.css']
})
export class MatrizValuadaPage {
  

  criterios: any[] = [];
  alternativas:any[] = [];
  proyectos: any[] = [];
  proyectoSeleccionado: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.obtenerProyectos();
  }

  mostrarCriterios() {
    this.apiService.getcriterio(this.proyectoSeleccionado).subscribe({
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

  mostrarAlternativas() {
    this.apiService.getalternativas(this.proyectoSeleccionado).subscribe({
      next: (data) => {
        this.alternativas = Array.isArray(data) ? data : [data];
        // Inicializa valores vacíos para cada criterio en cada alternativa
        this.alternativas.forEach(alternativa => {
          alternativa.valores = {};
          this.criterios.forEach(criterio => {
            alternativa.valores[criterio.id_criterio] = 0;
          });
        });
      },
      error: (err) => {
        console.error('Error al obtener las alternativas:', err);
      }
    });
  }
 
  guardarSatisfaccion() {
  const datosMatriz: any[] = [];
  const id_proyecto = 1; // Cambia por el id real si es necesario

  this.alternativas.forEach(alternativa => {
    this.criterios.forEach(criterio => {
      datosMatriz.push({
        id_proyecto: id_proyecto,
        id_criterio: criterio.id_criterio,
        id_alternativa: alternativa.id_alternativa,
        satisfaccion: alternativa.valores[criterio.id_criterio]
      });
    });
  });

  // Enviar uno a uno
  let exitos = 0;
  let errores = 0;

  const enviarUnoAUno = (index: number) => {
    if (index >= datosMatriz.length) {
      alert(`Matriz guardada. Éxitos: ${exitos}, Errores: ${errores}`);
      return;
    }
    this.apiService.enviarSatisfaccion(datosMatriz[index]).subscribe({
      next: () => {
        exitos++;
        enviarUnoAUno(index + 1);
      },
      error: () => {
        errores++;
        enviarUnoAUno(index + 1);
      }
    });
  };
  enviarUnoAUno(0);
  }
  generarMatriz() {
    this.mostrarCriterios();
    this.mostrarAlternativas();
  }

  obtenerProyectos() {
    this.apiService.getAllIDs().subscribe({
      next: (data) => {
        console.log('Proyectos recibidos:', data); // <-- Agrega esto
        this.proyectos = Array.isArray(data) ? data : [data];
      },
      error: (err) => {
        console.error('Error al obtener los proyectos:', err);
      }
    });
  }
}
