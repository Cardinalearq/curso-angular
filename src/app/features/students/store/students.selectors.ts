import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsState } from './students.reducer';

export const selectStudentsState = createFeatureSelector<StudentsState>('students');

export const selectStudents = createSelector(
    selectStudentsState,
    (state) => state.students
);

