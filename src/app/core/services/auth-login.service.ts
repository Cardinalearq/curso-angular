import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado = new BehaviorSubject<boolean>(false);
  private tipoUsuario = new BehaviorSubject<string>('');  // Nuevo BehaviorSubject para tipo de usuario
  public autenticado$ = this.autenticado.asObservable();
  public tipoUsuario$ = this.tipoUsuario.asObservable();  // Observable para el tipo de usuario

  login(tipo: string) {
    this.autenticado.next(true);
    this.tipoUsuario.next(tipo);  // Establecer el tipo de usuario
  }

  logout() {
    this.autenticado.next(false);
    this.tipoUsuario.next('');  // Limpiar el tipo de usuario al cerrar sesión
  }

  isLoggedIn(): boolean {
    return this.autenticado.getValue();
  }

  getTipoUsuario(): string {
    return this.tipoUsuario.getValue();  // Método para obtener el tipo de usuario
  }
}

