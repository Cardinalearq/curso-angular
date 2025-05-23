import { createAction, props } from '@ngrx/store';
import { Student } from './students.model';

export const loadStudents = createAction('[Students] Load Students');
export const loadStudentsSuccess = createAction('[Students] Load Students Success', props<{ students: Student[] }>());
export const loadStudentsFailure = createAction('[Students] Load Students Failure', props<{ error: any }>());

export const addStudent = createAction('[Students] Add Student', props<{ student: Student }>());
export const addStudentSuccess = createAction('[Students] Add Student Success', props<{ student: Student }>());

export const updateStudent = createAction('[Students] Update Student', props<{ id: string; student: Student }>());
export const updateStudentSuccess = createAction('[Students] Update Student Success', props<{ id: string; student: Student }>());

export const deleteStudent = createAction('[Students] Delete Student', props<{ id: string }>());
export const deleteStudentSuccess = createAction('[Students] Delete Student Success', props<{ id: string }>());







