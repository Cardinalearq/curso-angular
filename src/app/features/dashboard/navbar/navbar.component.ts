import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LoginDialogComponent } from '../../auth/login-dialog/login-dialog.component';
import { AuthService } from '../../../core/services/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Controla si el dropdown está abierto o cerrado
  isDropdownOpen = false;

  // BehaviorSubject para almacenar el estado de "Ingresado"
  ingresado$ = new BehaviorSubject<string>('Ingresar');

  // Inyecta AuthService y MatDialog
  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.tipoUsuario$.subscribe(tipo => {
      if (tipo) {
        this.ingresado$.next(`Ingresado: ${tipo}`);
      } else {
        this.ingresado$.next('Ingresar');
      }
    });
  }

  // Metodo para alternar el estado del dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
      
  // Metodo para actualizar el estado de "Ingresado" y abrir el diálogo de login
abrirLogin(opcion: string) {
  this.router.navigate(['/login'], {
    queryParams: { tipoUsuario: opcion }
  });
}

  cerrarSesion() {
    this.authService.logout(); 
    this.ingresado$.next('Ingresar');
    this.isDropdownOpen = false;
    
    // Redirige al home después de cerrar sesión
    this.router.navigate(['/']); 
  }
  
}





