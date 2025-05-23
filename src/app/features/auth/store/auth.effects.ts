import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
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

  constructor(private actions$: Actions) {}
}
