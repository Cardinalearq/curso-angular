import {ActionReducerMap} from "@ngrx/store"
import { authFeatureName, authReducer, AuthState } from '../../features/auth/store/auth.reducer';

export interface RootState {
    auth: AuthState;
}

export const rootReducer: ActionReducerMap<RootState> = {
    auth: authReducer
}

