import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
<<<<<<< HEAD
import { EMPTY, of } from 'rxjs';
import { loadAuths, loadAuthsSuccess, loadAuthsFailure } from './auth.actions';

@Injectable()
export class AuthEffects {
  loadAuths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAuths),
      concatMap(() =>
        EMPTY.pipe(
          map(data => loadAuthsSuccess({ data })),
          catchError(error => of(loadAuthsFailure({ error })))
        )
      )
    )
  );
=======
import { Observable, EMPTY, of } from 'rxjs';
import { AuthActions } from './auth.actions';


@Injectable()
export class AuthEffects {

  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.loadAuths),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AuthActions.loadAuthsSuccess({ data })),
          catchError(error => of(AuthActions.loadAuthsFailure({ error }))))
      )
    );
  });

>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3

  constructor(private actions$: Actions) {}
}
