import { ActionReducerMap } from "@ngrx/store"
import { authReducer, AuthState } from '../../features/auth/store/auth.reducer';
import { usuariosReducer, UsuariosState } from "../../features/users/store/users.reducer";
import { CursoState, cursoReducer } from '../../features/courses/store/courses.reducer';

export interface RootState {
    auth: AuthState;
    usuarios: UsuariosState;
    curso: CursoState;
}

export const rootReducer: ActionReducerMap<RootState> = {
    auth: authReducer,
    usuarios: usuariosReducer,
    curso: cursoReducer,
}

