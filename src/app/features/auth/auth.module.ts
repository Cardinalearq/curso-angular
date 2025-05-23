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

import { LoginDialogComponent } from '../auth/login-dialog/login-dialog.component';
<<<<<<< HEAD
import { LoginPageComponent } from '../auth/login-page/login-page.component';
=======
>>>>>>> 745268817a9e44533465de32629486cdad1f0b25
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LoginDialogComponent,
<<<<<<< HEAD
    LoginPageComponent
=======
>>>>>>> 745268817a9e44533465de32629486cdad1f0b25
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
    LoginDialogComponent,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatOptionModule,
    MatFormFieldModule, 
    MatInputModule, 
  ]
})
export class AuthModule { }
