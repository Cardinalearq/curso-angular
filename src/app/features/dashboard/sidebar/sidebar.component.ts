import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../../core/services/auth-login.service'; ELIMINO POR USO DE STORE
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { Observable } from 'rxjs';
import { unsetAuthUser } from '../../../features/auth/store/auth.actions';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  tipoUsuario$!: Observable<string>;

  constructor(private store: Store<RootState>, private router: Router) {}

  ngOnInit(): void {
    this.tipoUsuario$ = this.store.select(state => state.auth.authUser?.tipo || '');
  }

  navegarYScrollear (ruta: string){
    this.router.navigate([ruta]).then(() => {
      const main = document.getElementById('main-content');
      if (main) {
        const yOffset = main.offsetHeight;
        window.scrollTo ( { top: yOffset, behavior: 'smooth'});
      }
    });
  }

  cerrarSesion() {
    this.store.dispatch(unsetAuthUser());
    this.router.navigate(['/']).then (() => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    });
  }
}


// ELIMINO USO CON AUTHUSER Y AGREGO STORE

// export class SidebarComponent implements OnInit {
//   showFiller = false;
//   tipoUsuario: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     this.authService.tipoUsuario$.subscribe(tipo => {
//       this.tipoUsuario = tipo;
//     });
//   }

//   cerrarSesion() {
//     this.authService.logout();
//     this.router.navigate(['/']);
//   }
// }

