import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../../core/services/auth-login.service';  

@Component({
  selector: 'app-login-dialog',
  standalone: false,
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  // Inicializo el formulario en el constructor para evitar el error de fb no inicializado
  loginForm;
  tipoUsuario: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService  // Inyecto servicio
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
  
      const credencialesValidas = [
        { email: 'alumno@fadu.uba.ar', password: '1234', tipo: 'Alumno' },
        { email: 'docente@fadu.uba.ar', password: '1234', tipo: 'Docente' },
      ];
  
      const usuario = credencialesValidas.find(
        (cred) => cred.email === email && cred.tipo === this.tipoUsuario
      );
  
      if (!usuario) {
        // Email incorrecto para el tipo de usuario
        this.email?.setErrors({ invalidEmail: true });
        return;
      }
  
      if (usuario.password !== password) {
        // Contraseña incorrecta
        this.password?.setErrors({ invalidPassword: true });
        return;
      }
  
      // Si todo está bien, loguear
      this.authService.login(usuario.tipo);
      this.dialogRef.close({ success: true, tipoUsuario: usuario.tipo });
    }
  }

  // Getters para los controles de formulario
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
