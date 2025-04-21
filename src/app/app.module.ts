import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlumnoFormularioComponent } from './components/alumno-formulario/alumno-formulario.component';
import { ColorInscriptoDirective } from './directives/color-inscripto.directive';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TituloSizeDirective } from './directives/titulos.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,  
    MainComponent,
    FooterComponent,
    AlumnoFormularioComponent,
    ReactiveFormsComponent,
    SidebarComponent,
    EditDialogComponent,
    NombreCompletoPipe,
    TituloSizeDirective,
    ColorInscriptoDirective,
    ConfirmDialogComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
