import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { setAuthUser, unsetAuthUser } from '../../features/auth/store/auth.actions';
import { UsuariosService } from '../../core/services/usuarios.service';
import { Usuario } from '../../shared/interfaces/interfaces';
import { firstValueFrom } from 'rxjs';
=======
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { setAuthUser, unsetAuthUser } from '../../features/auth/store/auth.actions';

>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private credencialesValidas = [
    { email: 'alumno@fadu.uba.ar', password: '1234', rol: 'alumno' },
    { email: 'docente@fadu.uba.ar', password: '1234', rol: 'docente' },
  ];

<<<<<<< HEAD
  constructor(
    private store: Store<RootState>,
    private usuariosService: UsuariosService
  ) {}

  login(email: string, password: string, rol: string): Promise<'success' | 'invalidEmail' | 'invalidPassword'> {
    return fetch('http://localhost:3000/usuarios')
      .then(res => res.json())
      .then((usuarios) => {
        // Buscar en json-server
        const usuario = usuarios.find(
          (u: any) =>
            u.email === email &&
            u.rol.toLowerCase() === rol.toLowerCase()
        );

        if (usuario) {
          if (usuario.password !== password) return 'invalidPassword';

          this.store.dispatch(setAuthUser({ payload: usuario }));
          return 'success';
        }

        // Si no está en json-server, buscar en hardcodeado
        const hardcoded = this.credencialesValidas.find(
          (cred) =>
            cred.email === email &&
            cred.rol.toLowerCase() === rol.toLowerCase()
        );

        if (!hardcoded) return 'invalidEmail';
        if (hardcoded.password !== password) return 'invalidPassword';

        this.store.dispatch(setAuthUser({ payload: hardcoded }));
        return 'success';
      })
      .catch(error => {
        console.error('Error al verificar usuarios desde el servidor:', error);
        return 'invalidEmail';
      });
  }

  logout() {
    this.store.dispatch(unsetAuthUser());
  }
}



=======
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


>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
