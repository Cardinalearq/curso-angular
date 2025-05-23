import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
// import { AuthService } from '../services/auth-login.service'; No uso mas authservice y uso el store
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { map, take } from 'rxjs/operators';


export const docenteGuard: CanActivateFn = () => {
  const store = inject(Store<RootState>);

  return store.select(state => state.auth.authUser).pipe(
    take(1), // Suscribiste una sola vez para que no quede suscripto indefinidamente
    map(authUser => {
      if (!authUser) {
        alert('Debe iniciar sesión para acceder a esta sección.');
        return false;
      }

      if (authUser.tipo === 'Docente') {
        return true;
      } else {
        alert('Solo los docentes pueden acceder a esta sección.');
        return false;
      }
    })
  );
};

// Elimino funcionamiento con authservice

// export const docenteGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);

//   // Verificar si el usuario está autenticado
//   if (!authService.isLoggedIn()) {
//     alert('Debe iniciar sesión para acceder a esta sección.');
//     return false;
//   }

//   const tipoUsuario = authService.getTipoUsuario();

//   if (tipoUsuario === 'Docente') {
//     return true;
//   } else {
//     alert('Solo los docentes pueden acceder a esta sección.');
//     return false;
//   }
// };


