import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuariosState } from '../store/users.reducer';

export const selectUsuariosState = createFeatureSelector<UsuariosState>('usuarios');

export const selectUsuarios = createSelector(selectUsuariosState, state => state.usuarios);
export const selectUsuariosLoading = createSelector(selectUsuariosState, state => state.loading);
export const selectUsuariosError = createSelector(selectUsuariosState, state => state.error);


