import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComparacaoComponent } from './tabela-comparacao.component';

describe('TabelaComparacaoComponent', () => {
  let component: TabelaComparacaoComponent;
  let fixture: ComponentFixture<TabelaComparacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaComparacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaComparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
