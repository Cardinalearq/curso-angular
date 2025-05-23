import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-login.service';


@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm;
  tipoUsuario: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tipoUsuario = params['tipoUsuario'] || '';
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
        this.email?.setErrors({ invalidEmail: true });
        return;
      }

      if (usuario.password !== password) {
        this.password?.setErrors({ invalidPassword: true });
        return;
      }

      this.authService.login(usuario.tipo);
      this.router.navigate(['/dashboard']);
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}



