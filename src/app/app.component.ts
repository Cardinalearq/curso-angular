import { Component } from '@angular/core';
import { AuthService } from './core/services/auth-login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular';
  showFiller = false;
  autenticado$: Observable<boolean>;

  constructor(public authService: AuthService) {
    this.autenticado$ = this.authService.autenticado$;
  }
}
  