import { createAction, props } from '@ngrx/store';
import { Curso } from '../../../shared/interfaces/interfaces';

export const cargarCursos = createAction('[Curso] Cargar Cursos');
export const cargarCursosExito = createAction('[Curso] Cargar Cursos Éxito', props<{ cursos: Curso[] }>());
export const cargarCursosError = createAction('[Curso] Cargar Cursos Error', props<{ error: any }>());

export const agregarCurso = createAction('[Curso] Agregar Curso', props<{ curso: Curso }>());
export const agregarCursoExito = createAction('[Curso] Agregar Curso Éxito');
export const agregarCursoError = createAction('[Curso] Agregar Curso Error', props<{ error: any }>());

export const editarCurso = createAction('[Curso] Editar Curso', props<{ curso: Curso }>());
export const editarCursoExito = createAction('[Curso] Editar Curso Éxito');
export const editarCursoError = createAction('[Curso] Editar Curso Error', props<{ error: any }>());

export const eliminarCurso = createAction('[Curso] Eliminar Curso', props<{ id: number }>());
export const eliminarCursoExito = createAction('[Curso] Eliminar Curso Éxito');
export const eliminarCursoError = createAction('[Curso] Eliminar Curso Error', props<{ error: any }>());

