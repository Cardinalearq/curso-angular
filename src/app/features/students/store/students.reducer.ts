import { createReducer, on } from '@ngrx/store';
import { Student } from './students.model';
import * as StudentsActions from './students.actions';

export interface StudentsState {
  students: Student[];
}

export const initialState: StudentsState = {
  students: []
};

export const studentsReducer = createReducer(
  initialState,

  on(StudentsActions.addStudent, (state, { student }) => ({
    ...state,
    students: [...state.students, student]
  })),

  on(StudentsActions.updateStudent, (state, { id, student }) => ({
    ...state,
    students: state.students.map(s =>
      s.id === id ? { ...student, id } : s
    )
  })),

  on(StudentsActions.deleteStudent, (state, { id }) => ({
    ...state,
    students: state.students.filter(s => s.id !== id)
  }))
);


