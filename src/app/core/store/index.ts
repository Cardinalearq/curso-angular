<<<<<<< HEAD
import { ActionReducerMap } from "@ngrx/store"
import { authReducer, AuthState } from '../../features/auth/store/auth.reducer';
import { usuariosReducer, UsuariosState } from "../../features/users/store/users.reducer";

export interface RootState {
    auth: AuthState;
    usuarios: UsuariosState;
}

export const rootReducer: ActionReducerMap<RootState> = {
    auth: authReducer,
    usuarios: usuariosReducer,
=======
import {ActionReducerMap} from "@ngrx/store"
import { authFeatureName, authReducer, AuthState } from '../../features/auth/store/auth.reducer';

export interface RootState {
    auth: AuthState;
}

export const rootReducer: ActionReducerMap<RootState> = {
    auth: authReducer
>>>>>>> ffb4ba05b9559d65c9dbdd547389ebddcc0b34f3
}

