import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthUser = createSelector(
    selectAuthState,
    (state) => state.authUser
);

export const selectTipoUsuario = createSelector(
    selectAuthUser,
    (authUser) => authUser?.rol || '' 
);