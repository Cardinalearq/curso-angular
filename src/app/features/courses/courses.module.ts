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

import { CursoCreatorComponent } from '../../features/courses/curso-creator/curso-creator.component';
import { CursoSelectorComponent } from '../../features/courses/curso-selector/curso-selector.component';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CursoCreatorComponent,
    CursoSelectorComponent,
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
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatOptionModule,
    MatFormFieldModule, 
    MatInputModule, 
    ]
})
export class CoursesModule { }
