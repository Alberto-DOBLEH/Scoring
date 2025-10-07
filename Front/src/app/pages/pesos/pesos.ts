import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Criterio {
  id: number;
  nombre: string;
  descripcion: string;
  peso?: number;
}

@Component({
  selector: 'app-pesos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './pesos.html',
  styleUrls: ['./pesos.css'],
})
export class PesosPage implements OnInit {
  criterios: Criterio[] = [];
  projectId = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarCriterios();
  }

  cargarCriterios(): void {
    const url = `http://localhost:3000/api/criterios/${this.projectId}`;
    this.http.get<Criterio[]>(url).subscribe({
      next: (data) => {
        this.criterios = data;
        console.log('✅ Criterios cargados:', data);
      },
      error: (err) => {
        console.error('❌ Error al cargar criterios:', err);
      },
    });
  }

  actualizarPeso(criterio: Criterio): void {
    console.log(`🟢 Peso actualizado para ${criterio.nombre}: ${criterio.peso}`);
  }

  guardarPesos(): void {
    const url = `http://localhost:3000/api/pesos`;
    const payload = {
      projectId: this.projectId,
      criterios: this.criterios.map((c) => ({
        id: c.id,
        peso: c.peso ?? 0,
      })),
    };

    console.log('📤 Enviando datos:', payload);

    this.http.post(url, payload).subscribe({
      next: (res) => {
        console.log('✅ Pesos guardados correctamente:', res);
        alert('Pesos guardados correctamente ✅');
      },
      error: (err) => {
        console.error('❌ Error al guardar pesos:', err);
        alert('Error al guardar los pesos 😢');
      },
    });
  }
}
