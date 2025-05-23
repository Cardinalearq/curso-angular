import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Student } from '../store/students.model';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;
  let storeMock: any;
  let dialogMock: any;
  let snackBarMock: any;

  beforeEach(async () => {
    storeMock = {
      dispatch: jasmine.createSpy('dispatch'),
      select: jasmine.createSpy('select').and.returnValue(of([]))
    };

    dialogMock = {
      open: jasmine.createSpy('open').and.returnValue({
        afterClosed: () => of(true)
      })
    };

    snackBarMock = {
      open: jasmine.createSpy('open')
    };

    await TestBed.configureTestingModule({
      declarations: [ReactiveFormsComponent],
      imports: [ReactiveFormsModule, MatTableModule, BrowserAnimationsModule, HttpClientTestingModule],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: MatSnackBar, useValue: snackBarMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería marcar el formulario como inválido si está incompleto', () => {
    component.formulario.patchValue({
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      mensaje: ''
    });

    component.submit();

    expect(component.formulario.invalid).toBeTrue();
  });

  it('debería despachar addStudent cuando el formulario es válido', () => {
    component.formulario.patchValue({
      nombre: 'Juan',
      apellido: 'Pérez',
      edad: 25,
      email: 'juan@example.com',
      mensaje: 'Hola mundo',
      inscripto: true
    });

    component.submit();

    expect(storeMock.dispatch).toHaveBeenCalled();
    const dispatchedAction = storeMock.dispatch.calls.mostRecent().args[0];
    expect(dispatchedAction.student).toEqual(
      jasmine.objectContaining({
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 25,
        email: 'juan@example.com',
        mensaje: 'Hola mundo',
        inscripto: true
      })
    );
  });

  it('debería despachar deleteStudent cuando se confirma eliminarAlumno', () => {
    const alumno: Student = {
      id: '123',
      nombre: 'Ana',
      apellido: 'Gómez',
      edad: 20,
      email: 'ana@example.com',
      mensaje: 'Mensaje',
      inscripto: true
    };

    component.alumnos = [alumno];
    component.eliminarAlumno(0);

    expect(storeMock.dispatch).toHaveBeenCalledWith(
      jasmine.objectContaining({
        type: '[Students] Delete Student',
        id: '123'
      })
    );

    expect(snackBarMock.open).toHaveBeenCalledWith(
      'Alumno eliminado correctamente',
      'Cerrar',
      { duration: 3000, panelClass: ['snackbar-success'] }
    );
  });

  it('debería despachar updateStudent cuando se edita un alumno', () => {
    const alumno: Student = {
      id: '123',
      nombre: 'Pedro',
      apellido: 'López',
      edad: 30,
      email: 'pedro@example.com',
      mensaje: 'Mensaje original',
      inscripto: false
    };

    component.alumnos = [alumno];

    dialogMock.open.and.returnValue({
      afterClosed: () => of({
        edad: 31,
        mensaje: 'Actualizado'
      })
    });

    component.abrirDialogoEditar(0);

    expect(storeMock.dispatch).toHaveBeenCalledWith(
      jasmine.objectContaining({
        id: '123',
        student: jasmine.objectContaining({
          edad: 31,
          mensaje: 'Actualizado'
        })
      })
    );
  });
});




