import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionDocenteComponent } from './inicio-sesion-docente.component';

describe('InicioSesionDocenteComponent', () => {
  let component: InicioSesionDocenteComponent;
  let fixture: ComponentFixture<InicioSesionDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioSesionDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioSesionDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
