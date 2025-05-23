import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatTableModule } from '@angular/material/table';

import { UsersComponent } from './users.component';
import * as UsuariosActions from '../store/users.actions';
import * as UsuariosSelectors from '../store/users.selectors';
import { Usuario } from '../../../shared/interfaces/interfaces';

fdescribe('Componente UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let store: MockStore;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  const usuariosMock: Usuario[] = [
    { id: 1, email: 'user1@example.com', password: '123456', rol: 'alumno' },
    { id: 2, email: 'user2@example.com', password: '123456', rol: 'docente' },
  ];

  const estadoInicial = {
    usuariosState: {
      usuarios: usuariosMock,
      loading: false,
      error: null,
    }
  };

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [ReactiveFormsModule, MatTableModule],
      providers: [
        provideMockStore({ initialState: estadoInicial }),
        { provide: MatDialog, useValue: dialogSpy },
        { provide: MatSnackBar, useValue: snackBarSpy },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(UsuariosSelectors.selectUsuarios, usuariosMock);

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente y despachar cargarUsuarios al inicializar', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(UsuariosActions.cargarUsuarios());
  });

  it('debería agregar un nuevo usuario si el formulario es válido y el email no existe', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.formulario.setValue({
      email: 'nuevo@example.com',
      password: '123456',
      rol: 'alumno',
    });

    component.submit();

    expect(dispatchSpy).toHaveBeenCalledWith(
      UsuariosActions.agregarUsuario({
        usuario: {
          email: 'nuevo@example.com',
          password: '123456',
          rol: 'alumno',
        }
      })
    );
  });

  it('no debería agregar usuario si el email ya existe en la lista', () => {
    component.formulario.setValue({
      email: 'user1@example.com',
      password: '123456',
      rol: 'docente',
    });

    component.submit();

    expect(snackBarSpy.open).toHaveBeenCalledWith(
      'El email ya está en uso',
      'Cerrar',
      { duration: 3000, panelClass: ['snackbar-error'] }
    );
  });

  it('debería despachar editarUsuario si se está editando un usuario existente', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.editando = { id: 1, email: 'user1@example.com', password: '123456', rol: 'alumno' };
    component.formulario.setValue({
      email: 'editado@example.com',
      password: '123456',
      rol: 'docente',
    });

    component.submit();

    expect(dispatchSpy).toHaveBeenCalledWith(
      UsuariosActions.editarUsuario({
        usuario: {
          id: 1,
          email: 'editado@example.com',
          password: '123456',
          rol: 'docente',
        }
      })
    );
  });

  it('debería cancelar la edición y reiniciar el formulario', () => {
    component.editando = usuariosMock[0];
    component.cancelarEdicion();

    expect(component.editando).toBeNull();
    expect(component.formulario.value.rol).toBe('alumno');
  });
});


