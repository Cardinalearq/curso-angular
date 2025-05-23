import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { Observable } from 'rxjs';

import { CursoEffects } from './courses.effects';

fdescribe('CursoEffects', () => {
  let actions$: Observable<any>;
  let effects: CursoEffects;

  beforeEach(() => {
    actions$ = new Observable();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],   
      providers: [
        CursoEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(CursoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});


