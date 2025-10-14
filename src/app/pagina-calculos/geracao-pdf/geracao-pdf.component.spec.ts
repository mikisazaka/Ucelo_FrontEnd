import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracaoPdfComponent } from './geracao-pdf.component';

describe('GeracaoPdfComponent', () => {
  let component: GeracaoPdfComponent;
  let fixture: ComponentFixture<GeracaoPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeracaoPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeracaoPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
