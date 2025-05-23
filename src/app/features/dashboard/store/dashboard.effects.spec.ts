import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ReplaySubject } from 'rxjs';
import { DashboardEffects } from './dashboard.effects';
import { DashboardActions } from './dashboard.actions';

describe('DashboardEffects', () => {
  let actions$: ReplaySubject<any>;
  let effects: DashboardEffects;

  beforeEach(() => {
    actions$ = new ReplaySubject(1);

    TestBed.configureTestingModule({
      providers: [
        DashboardEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: {} }),
      ],
    });

    effects = TestBed.inject(DashboardEffects);
  });

  it('should create the effects instance', () => {
    expect(effects).toBeTruthy();
  });

  it('should emit loadDashboardsSuccess when loadDashboards is dispatched', (done) => {
    const dashboards = [{ id: '1' }, { id: '2' }];

    effects.loadDashboards$.subscribe(action => {
      expect(action).toEqual(DashboardActions.loadDashboardsSuccess({ dashboards }));
      done();
    });

    actions$.next(DashboardActions.loadDashboards());
  });
});





