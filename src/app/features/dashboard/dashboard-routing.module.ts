import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ReactiveFormsComponent } from '../students/reactive-forms/reactive-forms.component';
import { CursoSelectorComponent } from '../courses/curso-selector/curso-selector.component';
import { CursoCreatorComponent } from '../courses/curso-creator/curso-creator.component';
import { docenteGuard } from '../../core/guards/docente.guard';
import { alumnoGuard } from '../../core/guards/alumno.guard';
<<<<<<< HEAD
import { UsersComponent } from '../users/user-form/users.component';
=======
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3

const routes: Routes = [
  {
    path: '',
    component: HomeLoginComponent,
    children: [
      {
<<<<<<< HEAD
        path: 'users',
        component: UsersComponent,
        // canActivate: [docenteGuard, alumnoGuard]
      },
      {
=======
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
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

