import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEnviadoComponent } from './cadastro-enviado.component';

describe('CadastroEnviadoComponent', () => {
  let component: CadastroEnviadoComponent;
  let fixture: ComponentFixture<CadastroEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEnviadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
