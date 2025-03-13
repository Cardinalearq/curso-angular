import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Controla si el dropdown está abierto o cerrado
  isDropdownOpen = false;

  // Método para alternar el estado del dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}



