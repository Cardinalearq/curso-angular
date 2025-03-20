import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlumnoFormularioComponent } from './components/alumno-formulario/alumno-formulario.component';
import { ColorInscriptoDirective } from './directives/color-inscripto.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,  
    MainComponent,
    FooterComponent,
    AlumnoFormularioComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorInscriptoDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
