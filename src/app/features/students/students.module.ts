import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { EditDialogComponent } from '../students/edit-dialog/edit-dialog.component';
import { ReactiveFormsComponent } from '../students/reactive-forms/reactive-forms.component';

import { SharedModule } from '../../shared/shared.module';

import { StoreModule } from '@ngrx/store'; 
import { studentsReducer } from './store/students.reducer'; 
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './store/students.effects';



@NgModule({
  declarations: [
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
    SharedModule,
    StoreModule.forFeature('students', studentsReducer),
    EffectsModule.forFeature([StudentsEffects])
  ],
    exports: [
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
export class StudentsModule { }
