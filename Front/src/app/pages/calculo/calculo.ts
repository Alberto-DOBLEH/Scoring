import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'CalculoPage',
  standalone: true,
  templateUrl: './calculo.html',
  styleUrls: ['./calculo.css'],
})
export class CalculoPage implements OnInit {
  // Inicializa con arreglos vacíos para esperar los datos
  matriz_valuada: Alternativa[] = [];
  criterios: string[] = [];
  pre_resultado: Totales[] = [];
  resultado: Totales[] = [];
  textoFinal: string = 'Calculando...';

  private idProyecto: number = 1;

  constructor(private satisfaccionService: ApiService) {}

  ngOnInit() {
    this.cargarDatos(this.idProyecto);
  }

  cargarDatos(id: number) {
    this.satisfaccionService.getsatisfaccion(id).subscribe({
      next: (data) => {
        const { alternativas, criterios } = this.mapearDatos(data);

        this.matriz_valuada = alternativas;
        this.criterios = criterios;

        // Ejecuta los cálculos después de obtener los datos
        this.ejecutarCalculos();
      },
      error: (err) => {
        console.error('Error al cargar la satisfacción:', err);
        this.textoFinal = 'Error al cargar los datos necesarios.';
      },
    });
  }

  mapearDatos(data: any[]): { alternativas: Alternativa[]; criterios: string[] } {
    // Verifica que no esta vacio, si sí lo regresa vacio
    if (!data || data.length === 0) {
      return { alternativas: [], criterios: [] };
    }

    const alternativasMap = new Map<string, number[]>();
    const criteriosSet = new Set<string>();

    for (const item of data) {
      const altNombre = item['alternativa.nombre'];
      const critNombre = item['criterio.nombre'];
      const satisfaccion = item.satisfaccion;

      criteriosSet.add(critNombre);

      if (!alternativasMap.has(altNombre)) {
        alternativasMap.set(altNombre, []);
      }

      alternativasMap.get(altNombre)!.push(satisfaccion);
    }

    const criteriosArray = Array.from(criteriosSet);

    const alternativasArray: Alternativa[] = [];
    for (const [nombre, score] of alternativasMap.entries()) {
      alternativasArray.push({
        nombre: nombre,
        score: score,
        total: 0, // Se calculará después
      });
    }

    return { alternativas: alternativasArray, criterios: criteriosArray };
  }

  /**
   * Ejecuta los cálculos que antes estaban en las propiedades de la clase
   */
  ejecutarCalculos() {
    this.pre_resultado = calculo_total(this.matriz_valuada);

    // Arreglo con las resultados totales ordenados
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
  nombre: string; // Nombre de la alternativa
  score: number[]; // Calificación dada por el decisor
  total: number;
}

export interface Totales {
  nombre: string;
  total_score: number;
}

export function calculo_total(alternativas: Alternativa[]): Totales[] {
  let totales: Totales[] = [];
  for (const alternativa of alternativas) {
    const sumaTotal = alternativa.score.reduce((acumulador, scoreActual) => {
      return acumulador + scoreActual;
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
