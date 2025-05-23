import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CursoState } from './courses.reducer'; 

export const selectCursosFeature = createFeatureSelector<CursoState>('curso'); 

export const selectCursos = createSelector(
  selectCursosFeature,
  (state: CursoState) => state.cursos
);
