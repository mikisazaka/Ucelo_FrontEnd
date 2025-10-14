import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoCapacidadePotenciaComponent } from './calculo-capacidade-potencia.component';

describe('CalculoCapacidadePotenciaComponent', () => {
  let component: CalculoCapacidadePotenciaComponent;
  let fixture: ComponentFixture<CalculoCapacidadePotenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoCapacidadePotenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoCapacidadePotenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
