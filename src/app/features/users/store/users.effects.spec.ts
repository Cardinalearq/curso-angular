import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersEffects } from './users.effects';

fdescribe('UsersEffects', () => {
  let actions$: Observable<any> = of({});  
  let effects: UsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersEffects,
        provideMockActions(() => actions$)
      ],
      imports: [HttpClientTestingModule],
    });

    effects = TestBed.inject(UsersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

