import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LoginDialogComponent } from '../auth/login-dialog/login-dialog.component';
import { AuthService } from '../../core/services/auth-login.service';

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
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  // Metodo para alternar el estado del dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
        
  // Metodo para actualizar el estado de "Ingresado" y abrir el diálogo de login
  abrirLogin(opcion: string) {
    // Actualiza el estado de "Ingresado" dependiendo de la opción elegida
    this.ingresado$.next(`Ingresado: ${opcion}`);
    
    // Abre el diálogo de login
    const dialogRef = this.dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.authService.login(); // Cambia el estado a "logueado"
      }
    });
  }
}





