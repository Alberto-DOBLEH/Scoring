import { Component, OnInit } from '@angular/core';
import { ApiService, Proyecto } from '../../services/api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'CalculoPage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculo.html',
  styleUrls: ['./calculo.css'],
})
export class CalculoPage implements OnInit {
  // Inicializa con arreglos vacíos para esperar los datos
  matriz_valuada: Alternativa[] = [];
  criterios: Criterio[] = [];
  pre_resultado: Totales[] = [];
  resultado: Totales[] = [];
  textoFinal: string = '';
  Criterios_Con_Peso: Criterio[] = [];

  proyectos: Proyecto[] = [];
  selectedId?: number;

  //private idProyecto: number = 1;

  constructor(private satisfaccionService: ApiService) {}

  ngOnInit() {
    this.satisfaccionService.getAllIDs().subscribe({
      next: (data) => {
        this.proyectos = data;
      },
      error: (err) => console.error('Error cargando IDs:', err),
    });
  }

  onSeleccionar(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedId = Number(selectElement.value);
    this.cargarDatos(this.selectedId);
    console.log(this.selectedId);
  }

  cargarDatos(id: number) {
    this.satisfaccionService.getsatisfaccion(id).subscribe({
      next: (data) => {
        // Limpia antes de reasignar
        this.matriz_valuada = [];
        this.criterios = [];
        this.resultado = [];
        this.pre_resultado = [];

        const { alternativas, criterios } = this.mapearDatos(data);
        console.log(alternativas);
        this.matriz_valuada = [... alternativas];
        this.criterios = [...criterios];
        console.log(this.matriz_valuada);
        // Ejecuta los cálculos después de obtener los datos
        this.ejecutarCalculos();
      },
      error: (err) => {
        console.error('Error al cargar la satisfacción:', err);
        this.textoFinal = 'Error al cargar los datos necesarios.';
      },
    });
  }

  mapearDatos(data: any[]): { alternativas: Alternativa[]; criterios: Criterio[] } {
    if (!data || data.length === 0) {
      return { alternativas: [], criterios: [] };
    }

    const alternativasMap = new Map<string, number[]>();
    // Usaremos un Map temporal para desduplicar criterios y asegurar el peso correcto
    const criteriosTempMap = new Map<string, number>();

    for (const item of data) {
      const altNombre = item['alternativa.nombre'];
      const critNombre = item['criterio.nombre'];
      const satisfaccion = item.satisfaccion;
      const ponderacion = item['criterio.ponderacion'];

      if (!criteriosTempMap.has(critNombre)) {
        criteriosTempMap.set(critNombre, ponderacion);
      }

      if (!alternativasMap.has(altNombre)) {
        alternativasMap.set(altNombre, []);
      }

      alternativasMap.get(altNombre)!.push(satisfaccion);
    }

    const criteriosArray: Criterio[] = [];
    for (const [nombre, peso] of criteriosTempMap.entries()) {
      criteriosArray.push({
        nombre: nombre,
        peso: peso,
      });
    }

    const alternativasArray: Alternativa[] = [];
    for (const [nombre, score] of alternativasMap.entries()) {
      alternativasArray.push({
        nombre: nombre,
        score: score,
        total: 0,
      });
    }

    return {
      alternativas: alternativasArray,
      criterios: criteriosArray,
    };
  }

  ejecutarCalculos() {
    this.pre_resultado = calculo_total(this.matriz_valuada, this.criterios);

    this.resultado = this.pre_resultado.sort((a, b) => {
      if (a.total_score > b.total_score) {
        return -1;
      }
      if (a.total_score < b.total_score) {
        return 1;
      }
      return 0;
    });

    this.textoFinal = get_texto_final(this.resultado);
  }
}
export interface Alternativa {
  nombre: string;
  score: number[];
  total: number;
}

export interface Criterio {
  nombre: string;
  peso: number;
}

export interface Totales {
  nombre: string;
  total_score: number;
}

export function calculo_total(alternativas: Alternativa[], criterios: Criterio[]): Totales[] {
  let totales: Totales[] = [];
  let sumaTotal: number = 0;
  let pesos: number[] = criterios.map((criterio) => criterio.peso);
  for (const alternativa of alternativas) {
    sumaTotal = alternativa.score.reduce((acumulador, scoreActual, index) => {
      const pesoActual = pesos[index];
      return acumulador + scoreActual * pesoActual;
    }, 0);

    alternativa.total = sumaTotal;
    // Se crea el dato con el nombre de la alternativa en iteración y el total
    const resultado: Totales = {
      nombre: alternativa.nombre,
      total_score: sumaTotal,
    };

    // Se inserta el nuevo elemento
    totales.push(resultado);
  }

  return totales;
}

// Texto de abajo de las tablas
function get_texto_final(resultado: Totales[]): string {
  let texto = 'Dado el calculo anterior mediante el metodo scoring, las mejores alternativas son ';
  for (const alt of resultado) {
    texto += `${alt.nombre} con un puntaje de ${alt.total_score}, `;
  }
  return texto;
}
