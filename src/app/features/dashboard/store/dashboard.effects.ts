import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';
import { DashboardActions } from './dashboard.actions';
import { Dashboard } from './dashboard.model';

@Injectable()
export class DashboardEffects {
  loadDashboards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboards),
      concatMap(() => {
        // Aquí simulo datos o podría estar una llamada a servicio si la tuvieras
        const dashboards: Dashboard[] = [{ id: '1' }, { id: '2' }];
        return of(dashboards).pipe(
          map(dashboards => DashboardActions.loadDashboardsSuccess({ dashboards })),
          catchError(error => of(DashboardActions.loadDashboardsFailure({ error })))
        );
      })
    )
  );

  constructor(private actions$: Actions) {}
}



