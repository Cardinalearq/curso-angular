import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../features/dashboard/header/header.component';
import { NavbarComponent } from '../features/dashboard/navbar/navbar.component';
import { MainComponent } from '../features/dashboard/main/main.component';
import { FooterComponent } from '../features/dashboard/footer/footer.component';
import { SidebarComponent } from '../features/dashboard/sidebar/sidebar.component';
import { HomeComponent } from '../features/dashboard/home/home.component';
import { EditDialogComponent } from '../features/components/edit-dialog/edit-dialog.component';
import { LoginDialogComponent } from '../features/components/auth/login-dialog/login-dialog.component';
import { ReactiveFormsComponent } from '../features/components/reactive-forms/reactive-forms.component';
import { CursoSelectorComponent } from '../features/components/curso-selector/curso-selector.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { CursoCreatorComponent } from './components/curso-creator/curso-creator.component';
import { HomeLoginComponent } from './dashboard/home-login/home-login.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    EditDialogComponent,
    LoginDialogComponent,
    ReactiveFormsComponent,
    CursoSelectorComponent,
    CursoCreatorComponent,
    HomeLoginComponent
  ],
  imports: [
    CommonModule,
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
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    EditDialogComponent,
    LoginDialogComponent,
    ReactiveFormsComponent,
    CursoSelectorComponent,
    CursoCreatorComponent,
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
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    HomeLoginComponent
  ]
})

export class FeaturesModule {}