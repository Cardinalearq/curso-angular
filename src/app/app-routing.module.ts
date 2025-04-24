import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './features/reactive-forms/reactive-forms.component';
import { CursoSelectorComponent } from './features/curso-selector/curso-selector.component';

const routes: Routes = [
  // { path: '', component: MainComponent }, LO IDEAL ES NO COMENTAR ESTO, Y ASIGNARLE UN COMPONENTE MINIMO DE "BIENVENIDA" PORQUE DEJAR ESTO COMENTADO
  // MARCA ERRORES EN CONSOLA QUE PUEDEN DAR PROBLEMAS
  { path: 'ingresar-alumnos', component: ReactiveFormsComponent },
  { path: 'seleccionar-curso', component: CursoSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



