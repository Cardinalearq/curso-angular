import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../../shared/interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { AlumnosService } from '../../../core/services/alumnos.service'; 

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  standalone: false,
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public formulario: FormGroup;
  public alumnos: Alumnos[] = [];
  public dataSource = new MatTableDataSource<Alumnos>();
  public displayedColumns: string[] = ['nombre', 'edad', 'email', 'mensaje', 'inscripto', 'boton-editar', 'boton-eliminar'];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private alumnosService: AlumnosService
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
    this.alumnosService.alumnos$.subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
        this.dataSource.data = alumnos;
      },
      error: (error) => {
        console.error('Error al obtener alumnos:', error);
      }
    });
  }

  submit() {
    if (this.formulario.valid) {
      const nuevoAlumno: Alumnos = { ...this.formulario.value };
      this.alumnosService.agregarAlumno(nuevoAlumno);
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
        try {
          this.alumnosService.eliminarAlumno(index);
        } catch (error) {
          console.error('Error al eliminar alumno:', error);
        }
    }});
  }

  abrirDialogoEditar(index: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { ...this.alumnos[index] },
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe((resultado: Alumnos | undefined) => {
      if (resultado) {
        try {
          this.alumnosService.editarAlumno(index, resultado);
        } catch (error) {
          console.error('Error al editar alumno:', error);
        }
    }});
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





  




