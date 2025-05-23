import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ReactiveFormsComponent } from './reactive-forms.component';

fdescribe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormsComponent],
      imports: [ReactiveFormsModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Inicializar el formulario con los campos requeridos', () => {
    expect(component.formulario.contains('nombre')).toBeTrue();
    expect(component.formulario.contains('apellido')).toBeTrue();
    expect(component.formulario.contains('edad')).toBeTrue();
    expect(component.formulario.contains('email')).toBeTrue();
    expect(component.formulario.contains('mensaje')).toBeTrue();
    expect(component.formulario.contains('inscripto')).toBeTrue();
  });

  it('Marcar como invalido si el nombre está vacio', () => {
    const nombre = component.formulario.get('nombre');
    nombre?.setValue('');
    expect(nombre?.valid).toBeFalse();
  });

  it('Agregar un alumno si el formulario es valido', () => {
    const alumnoMock = {
      nombre: 'Fer',
      apellido: 'Cardinale',
      edad: 32,
      email: 'fer@hotmail.com',
      mensaje: 'Mensaje de prueba',
      inscripto: true
    };
  
    spyOn(component['alumnosService'], 'agregarAlumno');
  
    component.formulario.setValue(alumnoMock);
    component.submit();
  
    expect(component['alumnosService'].agregarAlumno).toHaveBeenCalledWith(alumnoMock);
  });

  it('No agregar alumno si el formulario es inválido', () => {
    spyOn(component['alumnosService'], 'agregarAlumno');
  
    component.formulario.get('nombre')?.setValue('');
    component.submit();
  
    expect(component['alumnosService'].agregarAlumno).not.toHaveBeenCalled();
  });

  it('Eliminar un alumno despues de confirmar el dialogo', () => {
    const dialogSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogSpy.afterClosed.and.returnValue(of(true));
  
    const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
    dialogMock.open.and.returnValue(dialogSpy);
  
    component['dialog'] = dialogMock;
    spyOn(component['alumnosService'], 'eliminarAlumno');
  
    component.eliminarAlumno(0);
  
    expect(dialogMock.open).toHaveBeenCalled();
    expect(component['alumnosService'].eliminarAlumno).toHaveBeenCalledWith(0);
  });

  it('Editar un alumno después de cerrar el diálogo con datos', () => {
    const alumnoEditado = {
      nombre: 'Fer',
      apellido: 'Cardinale',
      edad: 32,
      email: 'fer@hotmail.com',
      mensaje: 'Mensaje de prueba',
      inscripto: true
    };
  
    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of(alumnoEditado) });
  
    const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
    dialogMock.open.and.returnValue(dialogRefSpyObj);
  
    component['dialog'] = dialogMock;
    component['alumnos'] = [alumnoEditado];
  
    spyOn(component['alumnosService'], 'editarAlumno');
  
    component.abrirDialogoEditar(0);
  
    expect(component['alumnosService'].editarAlumno).toHaveBeenCalledWith(0, alumnoEditado);
  });
});
