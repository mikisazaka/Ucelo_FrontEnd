import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  imports: [CommonModule, MatIconModule, MatListModule, MatTooltipModule, MatButtonModule, RouterLink, RouterLinkActive],
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleMenu = new EventEmitter<void>();

  @Input() userType: 'cliente' | 'funcionario' = 'cliente';

  public routeLinks: { link: string; label: string; icon?: string; customIcon?: string }[] = [];

  ngOnInit() {
    this.loadMenuByUserType();
  }

  private loadMenuByUserType(): void {
    if (this.userType === 'cliente') {
      this.routeLinks = [
        { link: '/login', label: 'Login', icon: 'home' },
        { link: '/tabela-comparacao', label: 'Tabela de Comparação', customIcon: 'icons/tabela-icon.png' },
        { link: '/calculo-capacidade-potencia', label: 'Calculo de capacidade e potência', customIcon: 'icons/capacidade-icon.png' },
        { link: '/definicao-correia', label: 'Definição de Correia', customIcon: 'icons/correia-icon.png' },
        { link: '/geracao-pdf', label: 'Geração de PDF', customIcon: 'icons/pdf-icon.png' },
        { link: '/logout', label: 'Sair', customIcon: 'icons/sair-icon.png' },
      ];
    } else if (this.userType === 'funcionario') {
      this.routeLinks = [
        { link: '/cadastro', label: 'Cadastro', icon: 'dashboard' },
        { link: '/solicitacao-cadastro', label: 'Solicitações', customIcon: 'icons/solicitacao-icon.png' },
        { link: '/usuarios', label: 'Lista de usuários', customIcon: 'icons/usuarios-icon.png' },
        { link: '/logout', label: 'Sair', customIcon: 'icons/sair-icon.png' },
      ];
    }
  }
}
