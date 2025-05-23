import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../../shared/interfaces/interfaces';

export const cargarUsuarios = createAction('[Usuarios] Cargar usuarios');
export const cargarUsuariosSuccess = createAction('[Usuarios] Cargar usuarios Success', props<{ usuarios: Usuario[] }>());
export const cargarUsuariosFailure = createAction('[Usuarios] Cargar usuarios Failure', props<{ error: any }>());

export const agregarUsuario = createAction('[Usuarios] Agregar usuario', props<{ usuario: Usuario }>());
export const agregarUsuarioSuccess = createAction('[Usuarios] Agregar usuario Success', props<{ usuario: Usuario }>());
export const agregarUsuarioFailure = createAction('[Usuarios] Agregar usuario Failure', props<{ error: any }>());

export const eliminarUsuario = createAction('[Usuarios] Eliminar usuario', props<{ id: number }>());
export const eliminarUsuarioSuccess = createAction('[Usuarios] Eliminar usuario Success', props<{ id: number }>());
export const eliminarUsuarioFailure = createAction('[Usuarios] Eliminar usuario Failure', props<{ error: any }>());

export const editarUsuario = createAction('[Usuarios] Editar usuario', props<{ usuario: Usuario}>());
export const editarUsuarioSuccess = createAction('[Usuarios] Editar usuario Success', props<{ usuario: Usuario }>());
export const editarUsuarioFailure = createAction('[Usuarios] Editar usuario Failure', props<{ error: any }>());

