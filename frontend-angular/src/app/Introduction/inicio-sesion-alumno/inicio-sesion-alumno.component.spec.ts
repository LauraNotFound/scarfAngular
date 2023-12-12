import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionAlumnoComponent } from './inicio-sesion-alumno.component';

describe('InicioSesionAlumnoComponent', () => {
  let component: InicioSesionAlumnoComponent;
  let fixture: ComponentFixture<InicioSesionAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioSesionAlumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioSesionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
