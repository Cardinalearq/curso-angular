import { createReducer, on } from '@ngrx/store';
import { Student } from './students.model';
import * as StudentsActions from './students.actions';

export interface StudentsState {
  students: Student[];
  error: any;
}

export const initialState: StudentsState = {
  students: [],
  error: null
};

export const studentsReducer = createReducer(
  initialState,

  on(StudentsActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students
  })),

  on(StudentsActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    error
  })),

  on(StudentsActions.addStudentSuccess, (state, { student }) => ({
    ...state,
    students: [...state.students, student]
  })),

  on(StudentsActions.updateStudentSuccess, (state, { id, student }) => ({
    ...state,
    students: state.students.map(s => (s.id === id ? { ...student, id } : s))
  })),

  on(StudentsActions.deleteStudentSuccess, (state, { id }) => ({
    ...state,
    students: state.students.filter(s => s.id !== id)
  }))
);





