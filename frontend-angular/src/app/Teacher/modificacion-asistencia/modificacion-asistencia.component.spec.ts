import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionAsistenciaComponent } from './modificacion-asistencia.component';

describe('ModificacionAsistenciaComponent', () => {
  let component: ModificacionAsistenciaComponent;
  let fixture: ComponentFixture<ModificacionAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificacionAsistenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificacionAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
