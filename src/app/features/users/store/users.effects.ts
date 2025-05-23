import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuariosService } from '../../../core/services/usuarios.service';
import * as UsuariosActions from '../store/users.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usuariosService = inject(UsuariosService);

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuariosActions.cargarUsuarios),
      mergeMap(() =>
        this.usuariosService.getUsuarios().pipe(
          map(usuarios => UsuariosActions.cargarUsuariosSuccess({ usuarios })),
          catchError(error => of(UsuariosActions.cargarUsuariosFailure({ error })))
        )
      )
    )
  );

  agregarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuariosActions.agregarUsuario),
      mergeMap(({ usuario }) =>
        this.usuariosService.agregarUsuario(usuario).pipe(
          map(nuevo => UsuariosActions.agregarUsuarioSuccess({ usuario: nuevo })),
          catchError(error => of(UsuariosActions.agregarUsuarioFailure({ error })))
        )
      )
    )
  );

  eliminarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuariosActions.eliminarUsuario),
      mergeMap(({ id }) =>
        this.usuariosService.eliminarUsuario(id).pipe(
          map(() => UsuariosActions.eliminarUsuarioSuccess({ id })),
          catchError(error => of(UsuariosActions.eliminarUsuarioFailure({ error })))
        )
      )
    )
  );

  editarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuariosActions.editarUsuario),
      mergeMap(({ usuario }) =>
        this.usuariosService.editarUsuario(usuario).pipe(
          map(u => UsuariosActions.editarUsuarioSuccess({ usuario: u })),
          catchError(error => of(UsuariosActions.editarUsuarioFailure({ error })))
        )
      )
    )
  );
}

