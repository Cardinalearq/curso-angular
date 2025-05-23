<<<<<<< HEAD
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
=======
import { createActionGroup, emptyProps, props } from '@ngrx/store';
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
import { Update } from '@ngrx/entity';

import { Auth } from './auth.model';

<<<<<<< HEAD
// export const AuthActions = createActionGroup({
//   source: 'Auth/API',
//   events: {
//     'Load Auths': props<{ auths: Auth[] }>(),
//     'Add Auth': props<{ auth: Auth }>(),
//     'Upsert Auth': props<{ auth: Auth }>(),
//     'Add Auths': props<{ auths: Auth[] }>(),
//     'Upsert Auths': props<{ auths: Auth[] }>(),
//     'Update Auth': props<{ auth: Update<Auth> }>(),
//     'Update Auths': props<{ auths: Update<Auth>[] }>(),
//     'Delete Auth': props<{ id: string }>(),
//     'Delete Auths': props<{ ids: string[] }>(),
//     'Clear Auths': emptyProps(),
//   }
// });

export const setAuthUser = createAction(
  '[Auth] setAuthUser', props<{payload:{email: string, password: string, tipo: string}}>()
);

export const unsetAuthUser = createAction('[Auth] unsetAuthUser');
=======
export const AuthActions = createActionGroup({
  source: 'Auth/API',
  events: {
    'Load Auths': props<{ auths: Auth[] }>(),
    'Add Auth': props<{ auth: Auth }>(),
    'Upsert Auth': props<{ auth: Auth }>(),
    'Add Auths': props<{ auths: Auth[] }>(),
    'Upsert Auths': props<{ auths: Auth[] }>(),
    'Update Auth': props<{ auth: Update<Auth> }>(),
    'Update Auths': props<{ auths: Update<Auth>[] }>(),
    'Delete Auth': props<{ id: string }>(),
    'Delete Auths': props<{ ids: string[] }>(),
    'Clear Auths': emptyProps(),
  }
});
>>>>>>> db31503df3a004ae9590021ee9c5089eaeeff37e
