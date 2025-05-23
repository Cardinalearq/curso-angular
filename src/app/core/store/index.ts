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
}

