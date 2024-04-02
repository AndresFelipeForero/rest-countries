import { Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';

export const routes: Routes = [
    {path: '', redirectTo: 'countries', pathMatch: 'full'},
    {path: 'countries', component: CountriesComponent},
    {path: 'countries/:code', loadComponent: () => import('./components/countries-details/countries-details.component').then(c => c.CountriesDetailsComponent)}
];
