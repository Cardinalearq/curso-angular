import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDialogComponent } from './edit-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

fdescribe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  const mockData = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    email: 'juan@ejemplo.com',
    mensaje: 'Hola',
    inscripto: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDialogComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        BrowserAnimationsModule 
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockData }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


