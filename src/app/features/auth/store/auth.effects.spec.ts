import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';

describe('AuthEffects', () => {
  let actions$: ReplaySubject<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    actions$ = new ReplaySubject(1);

    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch loadAuthsSuccess when loadAuths is dispatched', (done) => {
    effects.loadAuths$.subscribe(action => {
      if (action.type === AuthActions.loadAuthsSuccess.type) {
        expect(action.data).toBeDefined();
        done();
      }
    });

    actions$.next(AuthActions.loadAuths());
  });
});









