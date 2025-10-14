import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-site/inicial/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './pagina-site/inicial/login/login.component';
import { CadastroComponent } from './pagina-site/inicial/cadastro/cadastro.component';
import { TabelaComparacaoComponent } from './pagina-calculos/tabela-comparacao/tabela-comparacao.component';
import { CalculoCapacidadePotenciaComponent } from './pagina-calculos/calculo-capacidade-potencia/calculo-capacidade-potencia.component';
import { DefinicaoCorreiaComponent } from './pagina-calculos/definicao-correia/definicao-correia.component';
import { GeracaoPdfComponent } from './pagina-calculos/geracao-pdf/geracao-pdf.component';
import { SolicitacaoCadastroComponent } from './pagina-administrador/solicitacao-cadastro/solicitacao-cadastro.component';
import { UsuariosComponent } from './pagina-administrador/usuarios/usuarios.component';
import { LogoutComponent } from './pagina-site/logout/logout.component';

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
        path: 'tabela-comparacao',
        component: TabelaComparacaoComponent
    },

    {
        path: 'calculo-capacidade-potencia',
        component: CalculoCapacidadePotenciaComponent
    },

    {
        path: 'definicao-correia',
        component: DefinicaoCorreiaComponent
    },

    {
        path: 'geracao-pdf',
        component: GeracaoPdfComponent
    },

    {
        path: 'solicitacao-cadastro',
        component: SolicitacaoCadastroComponent
    },

    {
        path: 'usuarios',
        component: UsuariosComponent
    },

    {
        path: 'logout',
        component: LogoutComponent
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
