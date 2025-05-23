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






