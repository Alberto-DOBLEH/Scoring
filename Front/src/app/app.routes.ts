import { Routes } from '@angular/router';
import { LayoutComponent } from './header-footer/layout';
import { InicioPage } from './pages/inicio/inicio';
import { ProyectosPage } from './pages/proyectos/proyectos';
import { CriteriosPage } from './pages/criterios/criterios';
import { CalculoPage } from './pages/calculo/calculo';
import { MatrizValuadaPage } from './pages/matriz-valuada/matriz';
import { PesosPage } from './pages/pesos/pesos';
import { AlterCrit } from './pages/alter-crit/alter-crit';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inicio' },
      { path: 'inicio', component: InicioPage },
      { path: 'proyectos', component: ProyectosPage },
      { path: 'alter-crit', component: AlterCrit },
      { path: 'criterios', component: CriteriosPage },
      { path: 'calculo', component: CalculoPage },
      { path: 'matriz-valuada', component: MatrizValuadaPage },
      { path: 'pesos', component: PesosPage },
      { path: '**', redirectTo: 'inicio' }
    ]
  }
];

