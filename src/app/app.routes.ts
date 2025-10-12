import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-site/inicial/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './pagina-site/inicial/login/login.component';
import { CadastroComponent } from './pagina-site/inicial/cadastro/cadastro.component';

export const routes: Routes = [

    { 
        path: 'ucelo', 
        component: PaginaInicialComponent, 
    },

    { 
        path: 'login', 
        component: LoginComponent 
    },

    {
        path: 'cadastro',
        component: CadastroComponent
    },

    { 
        path: '**', 
        component: PaginaInicialComponent 
    },

    { 
        path: '', 
        redirectTo: 'Ucelo', 
        pathMatch: 'full' 
    },

];
