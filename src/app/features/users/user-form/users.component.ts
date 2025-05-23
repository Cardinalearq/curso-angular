import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../shared/interfaces/interfaces';
import { RootState } from '../../../core/store/index';
import * as UsuariosActions from '../store/users.actions';
import * as UsuariosSelectors from '../store/users.selectors';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  formulario: FormGroup;
  dataSource = new MatTableDataSource<Usuario>([]);
  displayedColumns = ['email', 'rol', 'boton-editar', 'boton-eliminar'];

  editando: Usuario | null = null;
  usuarios: Usuario[] = [];

  constructor(
    private fb: FormBuilder,
    private store: Store<RootState>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['alumno', Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.dispatch(UsuariosActions.cargarUsuarios());

    this.store.select(UsuariosSelectors.selectUsuarios).subscribe(usuarios => {
      this.usuarios = usuarios;
      this.dataSource.data = usuarios;
    });
  }

  submit(): void {
    this.formulario.markAllAsTouched();

    if (this.formulario.invalid) {
      return;
    }

    const nuevoUsuario: Usuario = { ...this.formulario.value };
    const existe = this.usuarios.some(u => u.email === nuevoUsuario.email);

    if (existe && !this.editando) {
      this.snackBar.open('El email ya está en uso', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    if (this.editando?.id != null) {
      this.store.dispatch(
        UsuariosActions.editarUsuario({
          usuario: { ...nuevoUsuario, id: this.editando.id }
        })
      );
      this.editando = null;
    } else {
      this.store.dispatch(UsuariosActions.agregarUsuario({ usuario: nuevoUsuario }));
    }

    this.formulario.reset({ rol: 'alumno' });
  }

  eliminar(usuario: Usuario): void {
    this.formulario.markAsPristine();
    this.formulario.markAsUntouched();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { mensaje: '¿Estás seguro de eliminar este usuario?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.store.dispatch(UsuariosActions.eliminarUsuario({ id: usuario.id! }));

        this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });

        this.formulario.reset({ rol: 'alumno' });
        this.formulario.markAsPristine();
        this.formulario.markAsUntouched();
      }
    });
  }

  abrirDialogoEditar(usuario: Usuario): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe((result: Usuario | undefined) => {
      if (result) {
        this.store.dispatch(UsuariosActions.editarUsuario({ usuario: { ...result, id: usuario.id! } }));
      }
    });
  }

  cancelarEdicion(): void {
    this.editando = null;
    this.formulario.reset({ rol: 'alumno' });
  }

  get email() { return this.formulario.get('email'); }
  get password() { return this.formulario.get('password'); }
  get rol() { return this.formulario.get('rol'); }
}

