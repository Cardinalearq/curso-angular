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

  on(StudentsActions.updateStudent, (state, { index, student }) => {
    const updatedStudents = [...state.students];
    updatedStudents[index] = student;
    return { ...state, students: updatedStudents };
  }),

  on(StudentsActions.deleteStudent, (state, { index }) => {
    const updatedStudents = state.students.filter((_, i) => i !== index);
    return { ...state, students: updatedStudents };
  })
);

