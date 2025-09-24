import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'page-criterios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criterios.html',
  styleUrls: ['./criterios.css']
})
export class CriteriosPage {
  criterio = {
    id_proyecto: '',
    id_criterio: '',
    nombre: '',
    descripcion: '',
    ponderacion: 5
  };

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
}
