import { CanActivateFn, Router  } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../store/index';
import { map, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store<RootState>);
  const snackBar = inject(MatSnackBar);
  const router = inject(Router);

  return store.select(state => state.auth.authUser).pipe(
    take(1),
    map(authUser => {
      if (!authUser) {
        snackBar.open('Debe iniciar sesión para acceder a esta sección.', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-warning']
        });
        router.navigate(['/']);
        return false;
      }
      return true;
    })
  );
};
