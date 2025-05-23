import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../../shared/interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { AlumnosService } from '../../../core/services/alumnos.service'; 
import { Store } from '@ngrx/store';
import { Student } from '../store/students.model';
import { addStudent, deleteStudent, updateStudent } from '../store/students.actions';
import { selectStudents } from '../store/students.selectors';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  standalone: false,
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  
  public alumnos: Student[] = [];
  public dataSource = new MatTableDataSource<Student>();
  public formulario: FormGroup;
  public displayedColumns: string[] = ['nombre', 'edad', 'email', 'mensaje', 'inscripto', 'boton-editar', 'boton-eliminar'];
  

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private alumnosService: AlumnosService,
    private store: Store
  ) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'), Validators.required]],
      apellido: ['', [Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'), Validators.required]],
      edad: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mensaje: ['', [Validators.minLength(5), Validators.required]],
      inscripto: [false]
    });

    // Suscribirse a cambios en los alumnos
    this.store.select(selectStudents).subscribe((alumnos) => {
      this.alumnos = alumnos;
      this.dataSource.data = alumnos;
    });
  }

  submit() {
    if (this.formulario.valid) {
      const nuevoAlumno: Student = { ...this.formulario.value };
      this.store.dispatch(addStudent({ student: nuevoAlumno }));
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  eliminarAlumno(index: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { mensaje: '¿Estás seguro de que deseas eliminar este alumno?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.store.dispatch(deleteStudent({ index }));
      }
    });
  }

  abrirDialogoEditar(index: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { ...this.alumnos[index] },
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe((resultado: Student | undefined) => {
      if (resultado) {
        this.store.dispatch(updateStudent({ index, student: resultado }));
      }
    });
  }

  // Getters para validaciones
  get nombre() { return this.formulario.get('nombre'); }
  get apellido() { return this.formulario.get('apellido'); }
  get edad() { return this.formulario.get('edad'); }
  get email() { return this.formulario.get('email'); }
  get mensaje() { return this.formulario.get('mensaje'); }

  get isNombreInvalid() { return this.nombre?.touched && this.nombre?.invalid; }
  get isApellidoInvalid() { return this.apellido?.touched && this.apellido?.invalid; }
  get isEdadInvalid() { return this.edad?.touched && this.edad?.invalid; }
  get isEmailInvalid() { return this.email?.touched && this.email?.invalid; }
  get isMensajeInvalid() { return this.mensaje?.touched && this.mensaje?.invalid; }

}





  




