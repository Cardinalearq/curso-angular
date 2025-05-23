import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDialogComponent } from './user-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

fdescribe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let fixture: ComponentFixture<UserDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<UserDialogComponent>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [UserDialogComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            email: 'juan@example.com',
            password: '123456',
            rol: 'alumno',
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente e inicializar el formulario con los datos del diálogo', () => {
    expect(component).toBeTruthy();
    expect(component.form.value.email).toBe('juan@example.com');
    expect(component.form.value.password).toBe('123456');
    expect(component.form.value.rol).toBe('alumno');
  });

  it('no debería cerrar el diálogo si el formulario es inválido al guardar()', () => {
    component.form.patchValue({ email: '' }); // inválido porque email es requerido y debe ser email válido
    component.guardarCambios();
    expect(mockDialogRef.close).not.toHaveBeenCalled();
  });

  it('debería cerrar el diálogo con los datos del formulario cuando guardarCambios() es llamado y el formulario es válido', () => {
    component.guardarCambios();
    expect(mockDialogRef.close).toHaveBeenCalledWith({
      email: 'juan@example.com',
      password: '123456',
      rol: 'alumno',
    });
  });

  it('debería cerrar el diálogo sin cambios cuando cerrar() es llamado', () => {
    component.cerrar();
    expect(mockDialogRef.close).toHaveBeenCalledWith();
  });
});




