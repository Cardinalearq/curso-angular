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
            email: 'juan@ejemplo.com',
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

  it('deberia crear el componente e inicializar el formulario con los datos del dialogo', () => {
    expect(component).toBeTruthy();
    expect(component.form.value.email).toBe('juan@example.com');
    expect(component.form.value.password).toBe('123456');
    expect(component.form.value.rol).toBe('alumno');
  });

  it('no deberia cerrar el dialogo si el formulario es invalido al guardar()', () => {
    component.form.patchValue({ email: '' }); 
    component.guardarCambios();
    expect(mockDialogRef.close).not.toHaveBeenCalled();
  });

  it('deberia cerrar el dialogo con los datos del formulario cuando guardarCambios() es llamado y el formulario es valido', () => {
    component.guardarCambios();
    expect(mockDialogRef.close).toHaveBeenCalledWith({
      email: 'juan@example.com',
      password: '123456',
      rol: 'alumno',
    });
  });

  it('deberia cerrar el dialogo sin cambios cuando cerrar() es llamado', () => {
    component.cerrar();
    expect(mockDialogRef.close).toHaveBeenCalledWith();
  });
});




