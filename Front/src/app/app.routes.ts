import { Routes } from '@angular/router';
import { AlterCrit } from './alter-crit/alter-crit';
import { Criterios } from './criterios/criterios';

export const routes: Routes = [
    {path: 'alternativas', component: AlterCrit},
    {path: 'criterios', component: Criterios},
];