import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Alumnos } from '../../shared/interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public formulario: FormGroup;
  public alumnos: Alumnos[] = [];
  public dataSource = new MatTableDataSource<Alumnos>(this.alumnos);
  public displayedColumns: string[] = ['nombre', 'edad', 'email', 'mensaje', 'inscripto', 'boton-editar', 'boton-eliminar'];
  

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'), Validators.required]],
      apellido: ['', [Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'), Validators.required]],
      edad: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mensaje: ['', [Validators.minLength(5), Validators.required]],
      inscripto: [false]
    });
  }

  submit() {
    if (this.formulario.valid) {
      const nuevoAlumno: Alumnos = { ...this.formulario.value };
      this.alumnos.push(nuevoAlumno);
      this.dataSource.data = [...this.alumnos]; // actualiza la tabla
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
  
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.alumnos.splice(index, 1);
        this.dataSource.data = [...this.alumnos]; // actualiza la tabla
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

  abrirDialogoEditar(index: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { ...this.alumnos[index] }
    });
  
    dialogRef.afterClosed().subscribe((resultado: Alumnos | undefined) => {
      if (resultado) {
        this.alumnos[index] = resultado;
        this.dataSource.data = [...this.alumnos];
      }
    });}
  
}




  




