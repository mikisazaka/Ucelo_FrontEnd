import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-site/inicial/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './pagina-site/inicial/login/login.component';

export const routes: Routes = [
    { path: 'Ucelo', component: PaginaInicialComponent },
    { path: 'Login', component: LoginComponent },
    { path: '**', component: PaginaInicialComponent },
    { path: '', redirectTo: 'Ucelo', pathMatch: 'full' }

];
