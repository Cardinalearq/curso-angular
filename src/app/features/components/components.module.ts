import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { CursoCreatorComponent } from '../components/curso-creator/curso-creator.component';
import { CursoSelectorComponent } from '../components/curso-selector/curso-selector.component';
import { LoginDialogComponent } from '../components/auth/login-dialog/login-dialog.component';
import { EditDialogComponent } from '../components/edit-dialog/edit-dialog.component';
import { ReactiveFormsComponent } from '../components/reactive-forms/reactive-forms.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    CursoCreatorComponent,
    CursoSelectorComponent,
    LoginDialogComponent,
    EditDialogComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    SharedModule
  ],
  exports: [
    CursoCreatorComponent,
    CursoSelectorComponent,
    LoginDialogComponent,
    EditDialogComponent,
    ReactiveFormsComponent,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatOptionModule,
    MatFormFieldModule, 
    MatInputModule,     
  ]
})
export class ComponentsModule { }

