import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth-login.service';


@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFiller = false;

  constructor(private authService: AuthService) {}

  cerrarSesion() {
    console.log('Cerrar sesión');
    this.authService.logout(); 
  }

}
