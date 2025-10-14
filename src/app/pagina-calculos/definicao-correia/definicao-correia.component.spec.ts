import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoCorreiaComponent } from './definicao-correia.component';

describe('DefinicaoCorreiaComponent', () => {
  let component: DefinicaoCorreiaComponent;
  let fixture: ComponentFixture<DefinicaoCorreiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefinicaoCorreiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinicaoCorreiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
