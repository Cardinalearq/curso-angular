import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './features/components/reactive-forms/reactive-forms.component';
import { CursoSelectorComponent } from './features/components/curso-selector/curso-selector.component';
import { CursoCreatorComponent } from './features/components/curso-creator/curso-creator.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { docenteGuard } from './core/guards/docente.guard';
import { alumnoGuard } from './core/guards/alumno.guard';
import { HomeLoginComponent } from './features/dashboard/home-login/home-login.component';
import { MainComponent } from './features/dashboard/main/main.component';

const routes: Routes = [
  // Página pública de inicio
  { path: '', component: HomeComponent },

  // Ruta protegida con login y sidebar (padre de rutas privadas)
  {
    path: 'dashboard',
    component: HomeLoginComponent, // este contiene el <app-sidebar> y el <router-outlet>
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
  },

  // Redirección en caso de ruta inválida
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}



