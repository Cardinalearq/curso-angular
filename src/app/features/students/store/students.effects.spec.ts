import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, Observable } from 'rxjs';
import { StudentsEffects } from './students.effects';
import { AlumnosService } from '../../../core/services/alumnos.service';

fdescribe('StudentsEffects', () => {
  let actions$: Observable<any> = of(); 
  let effects: StudentsEffects;
  let alumnosServiceSpy: jasmine.SpyObj<AlumnosService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AlumnosService', ['getAlumnos', 'addAlumno', 'updateAlumno', 'deleteAlumno']);

    TestBed.configureTestingModule({
      providers: [
        StudentsEffects,
        provideMockActions(() => actions$),
        { provide: AlumnosService, useValue: spy }
      ]
    });

    effects = TestBed.inject(StudentsEffects);
    alumnosServiceSpy = TestBed.inject(AlumnosService) as jasmine.SpyObj<AlumnosService>;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

