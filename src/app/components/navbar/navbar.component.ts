import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  // Metodo para alternar el estado del dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Metodo para actualizar el estado de "Ingresado" cuando se elige una opción
  seleccionarOpcion(opcion: string) {
    this.ingresado$.next(`Ingresado: ${opcion}`);
  }
}




