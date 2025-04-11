import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../interfaces/interfaces';



@Component({
  selector: 'app-edit-dialog',
  standalone: false,
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.scss'
})
export class EditDialogComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos
  ) {
    this.form = this.fb.group({
      nombre: [data.nombre, [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'), Validators.minLength(3)]],
      apellido: [data.apellido, [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'), Validators.minLength(3)]],
      edad: [data.edad, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      mensaje: [data.mensaje, [Validators.required, Validators.minLength(5)]],
      inscripto: [data.inscripto]
    });
  }

  guardarCambios() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cerrar() {
    this.dialogRef.close();
  }
}
