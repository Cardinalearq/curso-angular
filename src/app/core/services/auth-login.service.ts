import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { setAuthUser, unsetAuthUser } from '../../features/auth/store/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<RootState>){}

  // ELIMINO OBSERVABLES Y AGREGO STORE AL CONSTRUCTOR

  // private autenticado = new BehaviorSubject<boolean>(false);
  // private tipoUsuario = new BehaviorSubject<string>('');
  // public autenticado$ = this.autenticado.asObservable();
  // public tipoUsuario$ = this.tipoUsuario.asObservable();

  private credencialesValidas = [
    { email: 'alumno@fadu.uba.ar', password: '1234', tipo: 'Alumno' },
    { email: 'docente@fadu.uba.ar', password: '1234', tipo: 'Docente' },
  ];

login(email: string, password: string, tipo: string): 'success' | 'invalidEmail' | 'invalidPassword' {
  console.log('Intentando login con:', { email, password, tipo });
  
  const usuario = this.credencialesValidas.find(
    (cred) => cred.email === email && cred.tipo === tipo
  );

  if (!usuario) return 'invalidEmail';
  if (usuario.password !== password) return 'invalidPassword';

  console.log('Usuario autenticado:', usuario);
    // ELIMINO OBSERVABLES Y AGREGO STORE

    // this.autenticado.next(true);
    // this.tipoUsuario.next(tipo);
  this.store.dispatch(
    setAuthUser({ payload: usuario })
  );

  return 'success';
}

  logout() {
    // ELIMINO OBSERVABLES Y AGREGO STORE

    // this.autenticado.next(false);
    // this.tipoUsuario.next('');
    this.store.dispatch(unsetAuthUser());
  }

  // ELIMINO OBSERVABLES

  // isLoggedIn(): boolean {
  //   return this.autenticado.getValue();
  // }

  // getTipoUsuario(): string {
  //   return this.tipoUsuario.getValue();
  // }
}


