import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-alter-crit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alter-crit.html',
  styleUrls: ['./alter-crit.css']
})
export class AlterCrit {
  alternativa = {
    id_proyecto: '',
    id_alternativa: '',
    nombre: '',
    descripcion: ''
  };

  constructor(private apiService: ApiService) {}

  guardarAlternativa() {
    if (
      !this.alternativa.id_proyecto ||
      !this.alternativa.id_alternativa ||
      !this.alternativa.nombre.trim()) {
      alert('Por favor completa todos los campos obligatorios (excepto descripción).');
      return;
    }
    this.apiService.enviarDatosAlternativas(this.alternativa).subscribe({
      next: (response) => {
        console.log('Alternativa guardada:', response);
        alert('Alternativa guardada exitosamente');
      },
      error: (err) => {
        console.error('Error al guardar la alternativa:', err);
      }
    });
  }
}