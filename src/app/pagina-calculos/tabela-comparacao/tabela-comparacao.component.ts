import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SideNavComponent } from '../../layout/side-nav/side-nav.component';

@Component({
  selector: 'app-tabela-comparacao',
  imports: [CommonModule, RouterModule, MatFormFieldModule, MatInputModule, MatIconModule, SideNavComponent],
  templateUrl: './tabela-comparacao.component.html',
  styleUrl: './tabela-comparacao.component.css'
})
export class TabelaComparacaoComponent {
  menuAberto = false;
  tipoUsuario: 'cliente' | 'funcionario' = 'cliente';
}
