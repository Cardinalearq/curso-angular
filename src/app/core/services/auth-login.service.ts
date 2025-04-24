import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado = new BehaviorSubject<boolean>(false);
  public autenticado$ = this.autenticado.asObservable();

  login() {
    this.autenticado.next(true);
  }

  logout() {
    this.autenticado.next(false);
  }

  isLoggedIn(): boolean {
    return this.autenticado.getValue();
  } 
}
