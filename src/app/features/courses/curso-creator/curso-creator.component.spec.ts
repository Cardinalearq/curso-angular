import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CursoCreatorComponent } from './curso-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import * as CursosActions from '../store/courses.actions';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('CursoCreatorComponent', () => {
  let component: CursoCreatorComponent;
  let fixture: ComponentFixture<CursoCreatorComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  // Stub para MatDialogRef con afterClosed que devuelve observable true
  const matDialogRefStub: Partial<MatDialogRef<any>> = {
    afterClosed: () => of(true),
    close: () => {},
  };

  // Mock para MatDialog que retorna el stub
  const matDialogMock = {
    open: () => matDialogRefStub,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoCreatorComponent],
      imports: [
      FormsModule, 
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      BrowserAnimationsModule,],
      providers: [
        provideMockStore({
          initialState: {
            courses: {
              cursos: [], 
            },
          },
        }),
        { provide: MatDialog, useValue: matDialogMock },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CursoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería despachar agregarCurso si el formulario es válido y no está en modo edición', () => {
    component.nuevoCurso = { nombre: 'Test', descripcion: 'Descripción' };
    component.isEdit = false;

    const fakeForm = { valid: true, resetForm: jasmine.createSpy('resetForm'), submitted: false };
    component.agregarCurso(fakeForm);

    expect(dispatchSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        curso: jasmine.objectContaining({
          nombre: 'Test',
          descripcion: 'Descripción',
        }),
      })
    );

    expect(fakeForm.resetForm).toHaveBeenCalled();
  });

  it('debería despachar eliminarCurso después de confirmar en diálogo', fakeAsync(() => {
    const cursoId = 5;

    component.eliminarCurso(cursoId);

    tick(); // Avanza la ejecución para procesar afterClosed()

    expect(dispatchSpy).toHaveBeenCalledWith(
      CursosActions.eliminarCurso({ id: cursoId })
    );
  }));

});







