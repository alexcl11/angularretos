import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { EquipoComponent } from './components/equipo.component/equipo.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "equipo/:id", component: EquipoComponent},

];
