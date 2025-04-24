import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './features/header/header.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { MainComponent } from './features/main/main.component';
import { FooterComponent } from './features/footer/footer.component';
import { ColorInscriptoDirective } from './shared/directives/color-inscripto.directive';
import { ReactiveFormsComponent } from './features/reactive-forms/reactive-forms.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { EditDialogComponent } from './features/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './features/confirm-dialog/confirm-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NombreCompletoPipe } from './shared/pipes/nombre-completo.pipe';
import { TituloSizeDirective } from './shared/directives/titulos.directive';
import { HttpClientModule } from '@angular/common/http';
import { CursoSelectorComponent } from './features/curso-selector/curso-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { LoginDialogComponent } from './features/auth/login-dialog/login-dialog.component';
import { AuthService } from './core/services/auth-login.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,                                           
    MainComponent,
    FooterComponent,
    ReactiveFormsComponent,
    SidebarComponent,
    EditDialogComponent,
    NombreCompletoPipe,
    TituloSizeDirective,
    ColorInscriptoDirective,
    ConfirmDialogComponent,
    CursoSelectorComponent,
    LoginDialogComponent
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
    MatCheckboxModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
