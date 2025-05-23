import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoSelectorComponent } from './curso-selector.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Curso } from '../../../shared/interfaces/interfaces';
import * as CursoActions from '../store/courses.actions';
import { of } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectCursos, selectCursosSeleccionados } from '../store/courses.selectors';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('CursoSelectorComponent', () => {
  let component: CursoSelectorComponent;
  let fixture: ComponentFixture<CursoSelectorComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  // Mock cursos y cursos seleccionados
  const mockCursos: Curso[] = [
    { id: 1, nombre: 'Angular Básico', descripcion: 'Curso introductorio de Angular' },
    { id: 2, nombre: 'RxJS Avanzado', descripcion: 'Curso avanzado de RxJS' }
  ];

  const mockCursosSeleccionados: Curso[] = [
    { id: 1, nombre: 'Angular Básico', descripcion: 'Curso introductorio de Angular' }
  ];

  // Mocks para MatDialog y MatSnackBar
  const matDialogMock = {
    open: jasmine.createSpy('open').and.returnValue({
      afterClosed: () => of(true)
    }),
  };

  const matSnackBarMock = {
    open: jasmine.createSpy('open')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoSelectorComponent],
      imports: [
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore(),
        { provide: MatDialog, useValue: matDialogMock },
        { provide: MatSnackBar, useValue: matSnackBarMock }
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    // Override selectors con datos mock
    store.overrideSelector(selectCursos, mockCursos);
    store.overrideSelector(selectCursosSeleccionados, mockCursosSeleccionados);
    store.refreshState();

    fixture = TestBed.createComponent(CursoSelectorComponent);
    component = fixture.componentInstance;

    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar cursos y cursos seleccionados desde el store', () => {
    expect(component.cursos.length).toBe(mockCursos.length);
    expect(component.cursosInscritos.length).toBe(mockCursosSeleccionados.length);
    expect(component.dataSource.data.length).toBe(mockCursosSeleccionados.length);
  });

  it('debe seleccionar un curso correctamente', () => {
    component.seleccionarCurso('Angular Básico');
    expect(component.cursoSeleccionado?.nombre).toBe('Angular Básico');
  });

  it('debe inscribir un curso si no está ya inscrito', () => {
    component.cursos = mockCursos;
    component.cursosInscritos = mockCursosSeleccionados;
    component.seleccionarCurso('RxJS Avanzado');
    component.verCurso();
    expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      type: CursoActions.agregarCursoSeleccionado.type
    }));
  });

  it('no debe inscribir un curso ya existente', () => {
    component.seleccionarCurso('Angular Básico');
    spyOn(component, 'yaInscripto').and.returnValue(true);
    component.verCurso();
    expect(dispatchSpy).not.toHaveBeenCalledWith(jasmine.objectContaining({
      type: CursoActions.agregarCursoSeleccionado.type
    }));
  });

  it('debe eliminar un curso correctamente', () => {
    component.eliminarCurso(0);
    expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      type: CursoActions.eliminarCursoSeleccionado.type
    }));
    expect(matDialogMock.open).toHaveBeenCalled();
  });

  it('debe actualizar un curso correctamente', () => {
    component.cursosInscritos = [{ id: 1, nombre: 'Curso 1', descripcion: 'Desc 1', editando: true }];
    component.cursos = [{ nombre: 'Curso 2', descripcion: 'Desc 2' }];
    component.actualizarCurso(0, 'Curso 2');
    expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      type: CursoActions.editarCursoSeleccionado.type
    }));
  });

});


