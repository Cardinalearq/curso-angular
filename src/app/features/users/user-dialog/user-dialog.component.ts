import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../shared/interfaces/interfaces';



@Component({
  selector: 'app-user-dialog',
  standalone: false,
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {
    this.form = this.fb.group({
      email: [data.email, [Validators.required, Validators.email]],
      password: [data.password, [Validators.required, Validators.minLength(6)]],
      rol: [data.rol, Validators.required]
    });
  }

  guardarCambios(): void {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    }
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}


