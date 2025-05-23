import { createReducer, on } from '@ngrx/store';
import * as UsuariosActions from '../store/users.actions';
import { Usuario } from '../../../shared/interfaces/interfaces';

export interface UsuariosState {
  usuarios: Usuario[];
  loading: boolean;
  error: any;
}

export const initialState: UsuariosState = {
  usuarios: [],
  loading: false,
  error: null,
};

export const usuariosReducer = createReducer(
  initialState,
  on(UsuariosActions.cargarUsuarios, state => ({ ...state, loading: true })),
  on(UsuariosActions.cargarUsuariosSuccess, (state, { usuarios }) => ({ ...state, usuarios, loading: false })),
  on(UsuariosActions.cargarUsuariosFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(UsuariosActions.agregarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    usuarios: [...state.usuarios, usuario],
  })),

  on(UsuariosActions.eliminarUsuarioSuccess, (state, { id }) => ({
    ...state,
    usuarios: state.usuarios.filter(u => u.id !== id),
  })),

  on(UsuariosActions.editarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    usuarios: state.usuarios.map(u => (u.id === usuario.id ? usuario : u)),
  }))
);

export const usuariosFeatureKey = 'usuarios'; 


