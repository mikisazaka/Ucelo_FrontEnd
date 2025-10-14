import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoCadastroComponent } from './solicitacao-cadastro.component';

describe('SolicitacaoCadastroComponent', () => {
  let component: SolicitacaoCadastroComponent;
  let fixture: ComponentFixture<SolicitacaoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
