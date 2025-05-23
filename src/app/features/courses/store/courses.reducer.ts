import { createReducer, on } from '@ngrx/store';
import * as CursoActions from './courses.actions';
import { Curso } from '../../../shared/interfaces/interfaces';

export interface CursoState {
  cursos: Curso[];
  error: any;
}

export const initialState: CursoState = {
  cursos: [],
  error: null
};

export const cursoReducer = createReducer(
  initialState,
  on(CursoActions.cargarCursos, state => {
    return { ...state }
  }),
  on(CursoActions.cargarCursosExito, (state, { cursos }) => ({
    ...state,
    cursos,
    error: null
  })),
  on(
    CursoActions.cargarCursosError,
    CursoActions.agregarCursoError,
    CursoActions.editarCursoError,
    CursoActions.eliminarCursoError,
    (state, { error }) => ({
      ...state,
      error
    })
  )
);



