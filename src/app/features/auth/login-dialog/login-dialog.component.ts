import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  standalone: false,
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  // Inicializamos el formulario en el constructor para evitar el error de fb no inicializado
  loginForm;
  
  tipoUsuario: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.tipoUsuario = data?.tipoUsuario ?? 'desconocido'; // valor por defecto
  
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      // Credenciales de ejemplo
      if (email === 'admin@fadu.uba.ar' && password === '1234') {
        this.dialogRef.close({ success: true, tipoUsuario: this.tipoUsuario }); // Login OK
      } else {
        this.dialogRef.close({ success: false, tipoUsuario: this.tipoUsuario }); // Login fail
      }
    }
  }

  // Getters para los controles de formulario
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}


