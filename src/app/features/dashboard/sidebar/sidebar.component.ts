import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  tipoUsuario: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.tipoUsuario$.subscribe(tipo => {
      this.tipoUsuario = tipo;
    });
  }

  cerrarSesion() {
    console.log('Cerrar sesión');
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

