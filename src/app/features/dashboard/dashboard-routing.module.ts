import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ReactiveFormsComponent } from '../students/reactive-forms/reactive-forms.component';
import { CursoSelectorComponent } from '../courses/curso-selector/curso-selector.component';
import { CursoCreatorComponent } from '../courses/curso-creator/curso-creator.component';
import { docenteGuard } from '../../core/guards/docente.guard';
import { alumnoGuard } from '../../core/guards/alumno.guard';
import { authGuard } from '../../core/guards/auth.guard';
import { UsersComponent } from '../users/user-form/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLoginComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
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

