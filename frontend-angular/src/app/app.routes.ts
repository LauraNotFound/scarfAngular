import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { IniciarSesionComponent } from './Introduction/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent} from './Introduction/inicio/inicio.component';
import { InicioSesionAlumnoComponent} from './Introduction/inicio-sesion-alumno/inicio-sesion-alumno.component';
import { InicioSesionDocenteComponent} from './Introduction/inicio-sesion-docente/inicio-sesion-docente.component';
import { InicioAlumnoComponent } from "./Student/inicio-alumno/inicio-alumno.component";
import { PerfilAlumnoComponent } from "./Student/perfil-alumno/perfil-alumno.component";
import { ReporteAlumnoComponent } from "./Student/reporte-alumno/reporte-alumno.component";
import { InicioDocenteComponent } from "./Teacher/inicio-docente/inicio-docente.component";
import { ModificacionAsistenciaComponent } from "./Teacher/modificacion-asistencia/modificacion-asistencia.component";
import { PerfilDocenteComponent } from "./Teacher/perfil-docente/perfil-docente.component";
import { RegistroAsistenciaComponent } from "./Teacher/registro-asistencia/registro-asistencia.component";
import { ReporteDocenteComponent } from "./Teacher/reporte-docente/reporte-docente.component";

const appRoutes: Routes= [
  { path: '', component: InicioComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent},
  { path: 'inicio-sesion-alumno', component: InicioSesionAlumnoComponent},
  { 
    path: 'admin',
    //canActivate: [authGuardFn],
    //component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'inicio-alumno',
        pathMatch:'full'
      },
      {path: 'inicio-alumno', component: InicioAlumnoComponent},
      {path: 'perfil-alumno', component: PerfilAlumnoComponent},
      {path: 'reporte-alumno', component: ReporteAlumnoComponent},
      //{path: '**', component: NotFound}
    ]
  },
  { path: 'inicio-sesion-docente', component: InicioSesionDocenteComponent},
  {
    path: 'admin',
    // canActivate: [authGuardFn],
    // component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'inicio-docente',
        pathMatch: 'full'
      },
      { path: 'inicio-docente', component: InicioDocenteComponent},
      { path: 'perfil-docente', component: PerfilDocenteComponent},
      { path: 'reporte-docente', component: ReporteDocenteComponent},
      { path: 'registro-asistencia', component: RegistroAsistenciaComponent},
      { path: 'modificacion-asistencia', component: ModificacionAsistenciaComponent},
      // { path: '**', component: NotFound}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IniciarSesionComponent, InicioComponent, InicioSesionAlumnoComponent, InicioSesionDocenteComponent, InicioAlumnoComponent, PerfilAlumnoComponent, ReporteAlumnoComponent, InicioDocenteComponent, ModificacionAsistenciaComponent, PerfilDocenteComponent, RegistroAsistenciaComponent, ReporteDocenteComponent]
