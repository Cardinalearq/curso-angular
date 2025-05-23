import { createAction, props } from '@ngrx/store';

export const loadAuths = createAction('[Auth] Load Auths');

export const loadAuthsSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ data: any }>() 
);

export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);

export const setAuthUser = createAction(
  '[Auth] setAuthUser',
  props<{ payload: { email: string; password: string; rol: string } }>()
);

export const unsetAuthUser = createAction('[Auth] unsetAuthUser');


