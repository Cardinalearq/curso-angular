import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CursoService } from '../../../core/services/curso.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CursoActions from './courses.actions';

@Injectable()
export class CursoEffects {
  private actions$ = inject(Actions);
  private cursoService = inject(CursoService);
  
  cargarCursos$ = createEffect(() => {
    console.log(this)
    return this.actions$.pipe(
      ofType(CursoActions.cargarCursos),
      mergeMap(() => {
        return this.cursoService.obtenerCursosDesdeApi().pipe(
          map(cursos => CursoActions.cargarCursosExito({ cursos })),
          catchError(error => of(CursoActions.cargarCursosError({ error })))
        );
      })
    );
  });

  agregarCurso$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursoActions.agregarCurso),
      mergeMap(action =>
        this.cursoService.agregarCurso(action.curso).pipe(
          map(() => CursoActions.agregarCursoExito()),
          catchError(error => of(CursoActions.agregarCursoError({ error })))
        )
      )
    )
  );

  editarCurso$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursoActions.editarCurso),
      mergeMap(action =>
        this.cursoService.editarCurso(action.curso).pipe(
          map(() => CursoActions.editarCursoExito()),
          catchError(error => of(CursoActions.editarCursoError({ error })))
        )
      )
    )
  );

  eliminarCurso$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursoActions.eliminarCurso),
      mergeMap(action =>
        this.cursoService.eliminarCurso(action.id).pipe(
          map(() => CursoActions.eliminarCursoExito()),
          catchError(error => of(CursoActions.eliminarCursoError({ error })))
        )
      )
    )
  );

  recargarCursosTrasCambios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CursoActions.agregarCursoExito,
        CursoActions.editarCursoExito,
        CursoActions.eliminarCursoExito
      ),
      map(() => CursoActions.cargarCursos())
    )
  );

  cargarCursosSeleccionados$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursoActions.cargarCursosSeleccionados),
      switchMap(() =>
        this.cursoService.obtenerCursosSeleccionados().pipe(
          map(cursos => CursoActions.cargarCursosSeleccionadosExito({ cursos })),
          catchError(error => of(CursoActions.cargarCursosSeleccionadosError({ error })))
        )
      )
    )
  );

  agregarCursoSeleccionado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursoActions.agregarCursoSeleccionado),
      mergeMap(action =>
        this.cursoService.agregarCursoSeleccionado(action.curso).pipe(
          map(() => CursoActions.agregarCursoSeleccionadoExito()),
          catchError(error => of(CursoActions.agregarCursoSeleccionadoError({ error })))
        )
      )
    )
  );

  editarCursoSeleccionado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursoActions.editarCursoSeleccionado),
      mergeMap(action =>
        this.cursoService.editarCursoSeleccionado(action.curso).pipe(
          map(() => CursoActions.editarCursoSeleccionadoExito()),
          catchError(error => of(CursoActions.editarCursoSeleccionadoError({ error })))
        )
      )
    )
  );

  eliminarCursoSeleccionado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CursoActions.eliminarCursoSeleccionado),
      mergeMap(action =>
        this.cursoService.eliminarCursoSeleccionado(action.id).pipe(
          map(() => CursoActions.eliminarCursoSeleccionadoExito()),
          catchError(error => of(CursoActions.eliminarCursoSeleccionadoError({ error })))
        )
      )
    )
  );

  recargarCursosSeleccionadosTrasCambios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CursoActions.agregarCursoSeleccionadoExito,
        CursoActions.eliminarCursoSeleccionadoExito,
        CursoActions.editarCursoSeleccionadoExito
      ),
      map(() => CursoActions.cargarCursosSeleccionados())
    )
  );
}


