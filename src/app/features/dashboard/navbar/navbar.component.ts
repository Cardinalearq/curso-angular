import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { RootState } from '../../../core/store';
import { unsetAuthUser } from '../../../features/auth/store/auth.actions';
import { selectTipoUsuario } from '../../../features/auth/store/auth.selectors';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  isDropdownOpen = false;
  tipoUsuario$: Observable<string | null>;
  private tipoUsuarioSub: Subscription;

  constructor(private store: Store<RootState>, private router: Router) {
    this.tipoUsuario$ = this.store.select(selectTipoUsuario);

    // 🔁 Cada vez que cambia el tipo de usuario (login/logout), cerramos el dropdown
    this.tipoUsuarioSub = this.tipoUsuario$.subscribe(() => {
      this.isDropdownOpen = false;
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  abrirLogin(opcion: string): void {
    this.router.navigate(['/login'], {
      queryParams: { tipoUsuario: opcion }
    });
  }

  cerrarSesion(): void {
    this.store.dispatch(unsetAuthUser());
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.tipoUsuarioSub.unsubscribe();
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





