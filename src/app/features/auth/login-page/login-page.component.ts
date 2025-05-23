import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-login.service';
<<<<<<< HEAD
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store/index';
import { selectAuthUser } from '../store/auth.selectors';
=======
<<<<<<< HEAD
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store/index';
import { selectAuthUser } from '../store/auth.selectors';
=======
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3


@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm;
  tipoUsuario: string = '';
<<<<<<< HEAD
  authUser$;

=======
<<<<<<< HEAD
  authUser$;

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authService: AuthService,
  private store: Store<RootState>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.authUser$ = this.store.select(selectAuthUser);
}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.tipoUsuario = params['tipoUsuario'] || '';
  });
}

submit() {
  if (this.loginForm.valid) {
    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';
    const result = this.authService.login(email, password, this.tipoUsuario);

    if (result === 'invalidEmail') {
      this.email?.setErrors({ invalidEmail: true });
      return;
    }

    if (result === 'invalidPassword') {
      this.password?.setErrors({ invalidPassword: true });
      return;
    }

    this.router.navigate(['/dashboard']);
  }
}
=======

>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
<<<<<<< HEAD
    private authService: AuthService,
    private store: Store<RootState>
    ) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
      });
      this.authUser$ = this.store.select(selectAuthUser);
=======
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tipoUsuario = params['tipoUsuario'] || '';
    });
  }

<<<<<<< HEAD
  async submit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';
      const result = await this.authService.login(email, password, this.tipoUsuario);

      if (result === 'invalidEmail') {
=======
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
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
        this.email?.setErrors({ invalidEmail: true });
        return;
      }

<<<<<<< HEAD
      if (result === 'invalidPassword') {
=======
      if (usuario.password !== password) {
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
        this.password?.setErrors({ invalidPassword: true });
        return;
      }

<<<<<<< HEAD
      this.router.navigate(['/dashboard']);
    }
  }
=======
      this.authService.login(usuario.tipo);
      this.router.navigate(['/dashboard']);
    }
  }
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}



