import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-login.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store/index';
import { selectAuthUser } from '../store/auth.selectors';


@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm;
  tipoUsuario: string = '';
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

  async submit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';
      const result = await this.authService.login(email, password, this.tipoUsuario);

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

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}



