import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
// import { AuthService } from '../services/auth-login.service'; No uso mas authservice y uso el store
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { map, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';



export const alumnoGuard: CanActivateFn = () => {
  const store = inject(Store<RootState>);
  const snackBar = inject(MatSnackBar);

  return store.select(state => state.auth.authUser).pipe(
    take(1),
    map(authUser => {
      if (!authUser) {
        snackBar.open('Debe iniciar sesión para acceder a esta sección.', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-warning']
        });
        return false;
      }

      if (authUser.rol === 'alumno') {
        return true;
      } else {
        snackBar.open('Solo los alumnos pueden acceder a esta sección.', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
        return false;
      }
    })
  );
};

// Elimino funcionamiento con authservice

// export const alumnoGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);

//   // Verifica si el usuario está autenticado
//   if (!authService.isLoggedIn()) {
//     alert('Debe iniciar sesión para acceder a esta sección.');
//     return false;
//   }

//   const tipoUsuario = authService.getTipoUsuario();

//   if (tipoUsuario === 'Alumno') {
//     return true;
//   } else {
//     alert('Solo los alumnos pueden acceder a esta sección.');
//     return false;
//   }
// };


