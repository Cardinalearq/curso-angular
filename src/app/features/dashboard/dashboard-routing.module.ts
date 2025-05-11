import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ReactiveFormsComponent } from '../components/reactive-forms/reactive-forms.component';
import { CursoSelectorComponent } from '../components/curso-selector/curso-selector.component';
import { CursoCreatorComponent } from '../components/curso-creator/curso-creator.component';
import { docenteGuard } from '../../core/guards/docente.guard';
import { alumnoGuard } from '../../core/guards/alumno.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeLoginComponent,
    children: [
      {
        path: 'ingresar-alumnos',
        component: ReactiveFormsComponent,
        canActivate: [docenteGuard]
      },
      {
        path: 'seleccionar-curso',
        component: CursoSelectorComponent,
        canActivate: [alumnoGuard]
      },
      {
        path: 'crear-curso',
        component: CursoCreatorComponent,
        canActivate: [docenteGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

