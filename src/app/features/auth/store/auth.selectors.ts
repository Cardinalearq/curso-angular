import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureName, AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthUser = createSelector(
    selectAuthState,
    (state) => state.authUser
);

export const selectTipoUsuario = createSelector(
    selectAuthUser,
<<<<<<< HEAD
    (authUser) => authUser?.rol || '' 
=======
    (authUser) => authUser?.tipo || '' 
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
);