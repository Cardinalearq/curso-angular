import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { setAuthUser, unsetAuthUser } from '../../features/auth/store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private credencialesValidas = [
    { email: 'alumno@fadu.uba.ar', password: '123456', rol: 'alumno' },
    { email: 'docente@fadu.uba.ar', password: '123456', rol: 'docente' },
  ];

  constructor(
    private store: Store<RootState>,
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

        this.store.select(state => state.auth.authUser).subscribe(user => {
        });

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



