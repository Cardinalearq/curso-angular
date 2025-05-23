import { Component } from '@angular/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
import { MatDialog } from '@angular/material/dialog'; 
// import { BehaviorSubject } from 'rxjs'; elimino por uso de store 
// import { LoginDialogComponent } from '../../auth/login-dialog/login-dialog.component'; Reemplazado por login page
// import { AuthService } from '../../../core/services/auth-login.service'; elimino por uso de store
<<<<<<< HEAD
=======
=======
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { LoginDialogComponent } from '../../auth/login-dialog/login-dialog.component';
import { AuthService } from '../../../core/services/auth-login.service';
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { unsetAuthUser } from '../../../features/auth/store/auth.actions';
import { selectTipoUsuario } from '../../../features/auth/store/auth.selectors';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
<<<<<<< HEAD

export class NavbarComponent {
  isDropdownOpen = false;
  tipoUsuario: string | null = null;

=======

export class NavbarComponent {
  isDropdownOpen = false;
  tipoUsuario: string | null = null;

<<<<<<< HEAD
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
  constructor(private store: Store<RootState>, private router: Router) {
    this.store.select(selectTipoUsuario).subscribe(valor => {
      this.tipoUsuario = valor || null;
      console.log('tipoUsuario:', this.tipoUsuario);
<<<<<<< HEAD
=======
=======
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
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
<<<<<<< HEAD

  abrirLogin(opcion: string) {
    this.router.navigate(['/login'], {
      queryParams: { tipoUsuario: opcion }
    });
=======
<<<<<<< HEAD

  abrirLogin(opcion: string) {
    this.router.navigate(['/login'], {
      queryParams: { tipoUsuario: opcion }
    });
  }
=======
      
  // Metodo para actualizar el estado de "Ingresado" y abrir el diálogo de login
abrirLogin(opcion: string) {
  this.router.navigate(['/login'], {
    queryParams: { tipoUsuario: opcion }
  });
}
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e

  cerrarSesion() {
    this.store.dispatch(unsetAuthUser());
    this.isDropdownOpen = false;
    this.router.navigate(['/']);
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
  }

  cerrarSesion() {
    this.store.dispatch(unsetAuthUser());
    this.isDropdownOpen = false;
    this.router.navigate(['/']);
  }
}


// ELIMINO USO DE AUTHUSER Y AGREGO STORE

// export class NavbarComponent {
//   // Controla si el dropdown está abierto o cerrado
//   isDropdownOpen = false;

//   // BehaviorSubject para almacenar el estado de "Ingresado"
//   ingresado$ = new BehaviorSubject<string>('Ingresar');

//   // Inyecta AuthService y MatDialog
//   constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     this.authService.tipoUsuario$.subscribe(tipo => {
//       if (tipo) {
//         this.ingresado$.next(`Ingresado: ${tipo}`);
//       } else {
//         this.ingresado$.next('Ingresar');
//       }
//     });
//   }

//   // Metodo para alternar el estado del dropdown
//   toggleDropdown() {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }
      
//   // Metodo para actualizar el estado de "Ingresado" y abrir el diálogo de login
// abrirLogin(opcion: string) {
//   this.router.navigate(['/login'], {
//     queryParams: { tipoUsuario: opcion }
//   });
// }

//   cerrarSesion() {
//     this.authService.logout(); 
//     this.ingresado$.next('Ingresar');
//     this.isDropdownOpen = false;
    
//     // Redirige al home después de cerrar sesión
//     this.router.navigate(['/']); 
//   }
  
// }





