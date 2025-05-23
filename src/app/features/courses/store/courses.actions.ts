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

export const cargarCursosSeleccionados = createAction('[Curso Seleccionado] Cargar');
export const cargarCursosSeleccionadosExito = createAction('[Curso Seleccionado] Cargar Éxito', props<{ cursos: Curso[] }>());
export const cargarCursosSeleccionadosError = createAction('[Curso Seleccionado] Cargar Error', props<{ error: any }>());

export const agregarCursoSeleccionado = createAction('[Curso Seleccionado] Agregar', props<{ curso: Curso }>());
export const agregarCursoSeleccionadoExito = createAction('[Curso Seleccionado] Agregar Éxito');
export const agregarCursoSeleccionadoError = createAction('[Curso Seleccionado] Agregar Error', props<{ error: any }>());

export const editarCursoSeleccionado = createAction('[Curso Seleccionado] Editar', props<{ curso: Curso }>());
export const editarCursoSeleccionadoExito = createAction('[Curso Seleccionado] Editar Éxito');
export const editarCursoSeleccionadoError = createAction('[Curso Seleccionado] Editar Error', props<{ error: any }>());

export const eliminarCursoSeleccionado = createAction('[Curso Seleccionado] Eliminar', props<{ id: number }>());
export const eliminarCursoSeleccionadoExito = createAction('[Curso Seleccionado] Eliminar Éxito');
export const eliminarCursoSeleccionadoError = createAction('[Curso Seleccionado] Eliminar Error', props<{ error: any }>());
