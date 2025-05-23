import { createAction, props } from '@ngrx/store';
import { Student } from './students.model';

export const addStudent = createAction(
  '[Students] Add Student',
  props<{ student: Student }>()
);

export const updateStudent = createAction(
  '[Students] Update Student',
  props<{ index: number; student: Student }>()
);

export const deleteStudent = createAction(
  '[Students] Delete Student',
  props<{ index: number }>()
);


