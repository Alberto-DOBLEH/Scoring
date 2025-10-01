import { Component } from '@angular/core';

@Component({
  selector: 'CalculoPage',
  standalone: true,
  templateUrl: './calculo.html',
  styleUrls: ['./calculo.css'],
})
export class CalculoPage {
  matriz_valuada: Alternativa[] = [
    { nombre: 'Corrolla', score: [9, 9, 9, 9, 9], total: 0 },
    { nombre: 'Camry', score: [9, 6, 7, 9, 7], total: 0 },
    { nombre: 'Monza', score: [4, 9, 4, 3, 9], total: 0 },
    { nombre: 'Grand AM', score: [4, 9, 4, 9, 9], total: 0 },
  ];

  criterios: string[] = ['Marca', 'Precio', 'Kilometraje', 'Mantenimiento/Anual', 'Consumo'];

  pre_resultado: Totales[] = calculo_total(this.matriz_valuada);

  // Arreglo con las resultados totales ordenados
  resultado: Totales[] = this.pre_resultado.sort(function (a, b) {
    if (a.total_score > b.total_score) {
      return -1;
    }
    if (a.total_score < b.total_score) {
      return 1;
    }

    return 0;
  });

  textoFinal = get_texto_final(this.resultado);
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
