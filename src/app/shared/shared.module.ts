import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloSizeDirective } from './directives/titulos.directive';
import { ColorInscriptoDirective } from './directives/color-inscripto.directive';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { CredencialesDialogComponent } from './components/credenciales-dialog/credenciales-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TituloSizeDirective,
    NombreCompletoPipe,
    ConfirmDialogComponent,
    ColorInscriptoDirective,
    CredencialesDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    TituloSizeDirective,
    NombreCompletoPipe,
    ConfirmDialogComponent,
    MatDialogModule,
    MatButtonModule,
    ColorInscriptoDirective
  ]
})
export class SharedModule {}


