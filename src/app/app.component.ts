import { Component } from '@angular/core';
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
  
  constructor(private store: Store<RootState>) {
    this.autenticado$ = store.select(state => !!state.auth.authUser);  
  }
}
  