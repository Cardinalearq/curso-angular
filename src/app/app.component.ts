import { Component } from '@angular/core';
import { AuthService } from './core/services/auth-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular';
  showFiller = false;

  constructor(public authService: AuthService) {}
}
