import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StudentsActions from './students.actions';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class StudentsEffects {
  private actions$ = inject(Actions);
  private alumnosService = inject(AlumnosService);

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.loadStudents),
      mergeMap(() =>
        this.alumnosService.getAlumnos().pipe(
          map(students => StudentsActions.loadStudentsSuccess({ students })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error })))
        )
      )
    )
  );

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.addStudent),
      mergeMap(action =>
        this.alumnosService.addAlumno(action.student).pipe(
          map(student => StudentsActions.addStudentSuccess({ student })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error })))
        )
      )
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.updateStudent),
      mergeMap(action =>
        this.alumnosService.updateAlumno(action.id, action.student).pipe(
          map(() => StudentsActions.updateStudentSuccess({ id: action.id, student: action.student })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error })))
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.deleteStudent),
      mergeMap(action =>
        this.alumnosService.deleteAlumno(action.id).pipe(
          map(() => StudentsActions.deleteStudentSuccess({ id: action.id })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error })))
        )
      )
    )
  );
}



