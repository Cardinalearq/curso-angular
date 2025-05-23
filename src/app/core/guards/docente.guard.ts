import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { map, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

export const docenteGuard: CanActivateFn = () => {
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
      
      if (authUser.rol === 'docente') {
        return true;
      } else {
        snackBar.open('Solo los docentes pueden acceder a esta sección.', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
        return false;
      }
    })
  );
};




