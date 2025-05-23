import { Component } from '@angular/core';
// import { AuthService } from './core/services/auth-login.service'; Elimino authservice y uso store
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from './core/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular';
  showFiller = false;
  autenticado$: Observable<boolean>;

  // Elimino authservice y uso store

  // constructor(public authService: AuthService) {
  //   this.autenticado$ = this.authService.autenticado$;
  // }
  constructor(private store: Store<RootState>) {
    this.autenticado$ = store.select(state => !!state.auth.authUser);  
  }
}
  