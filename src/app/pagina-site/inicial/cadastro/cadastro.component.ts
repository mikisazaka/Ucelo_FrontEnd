import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  estados: string[] = ['Paraná', 'São Paulo', 'Santa Catarina'];
  cidadesPorEstado: any = {
    'Paraná': ['Londrina', 'Maringá', 'Curitiba'],
    'São Paulo': ['Campinas', 'Ribeirão Preto', 'São Paulo'],
    'Santa Catarina': ['Joinville', 'Florianópolis', 'Blumenau']
  };

  estadoSelecionado: string = '';
  cidades: string[] = [];
  cidadeSelecionada: string = '';

  onEstadoChange() {
    this.cidades = this.cidadesPorEstado[this.estadoSelecionado] || [];
    this.cidadeSelecionada = '';
  }
}
