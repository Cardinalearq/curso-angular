import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './user-form/users.component';
import { StoreModule } from '@ngrx/store';
import { usuariosReducer, usuariosFeatureKey } from '../users/store/users.reducer'; 
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../users/store/users.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UsersComponent, UserDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    StoreModule.forFeature(usuariosFeatureKey, usuariosReducer), 
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule {}

