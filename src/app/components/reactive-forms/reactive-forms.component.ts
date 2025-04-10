import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Alumnos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public formulario: FormGroup;
  displayedColumns: string[] = ['nombre', 'edad', 'email', 'mensaje', 'inscripto', 'boton-eliminar'];
  dataSource: Alumnos [] = [];
  
  // Array de alumnos
  public alumnos: Alumnos[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.minLength(3),Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$'), Validators.required]],
      edad: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mensaje: ['', [Validators.minLength(5), Validators.required]],
      inscripto: [false]  
    });

    this.dataSource = this.alumnos;
  }

  submit() {
    if (this.formulario.valid) {
      // Objeto de alumno con los datos del formulario
      const nuevoAlumno = {
        ...this.formulario.value,
      };
      

      this.alumnos.push(nuevoAlumno);
      this.dataSource = this.alumnos;


      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  eliminarAlumno(index: number) {
    this.alumnos.splice(index, 1);  // Eliminar el alumno
  }

  // Metodos get para acceder a los controles del formulario
  get nombre() {
    return this.formulario.get('nombre');
  }

  get isNombreInvalid() {
    return this.nombre?.touched && this.nombre?.invalid;
  }

  get edad() {
    return this.formulario.get('edad');
  }

  get isEdadInvalid() {
    return this.edad?.touched && this.edad?.invalid;
  }

  get email() {
    return this.formulario.get('email');
  }

  get isEmailInvalid() {
    return this.email?.touched && this.email?.invalid;
  }

  get mensaje() {
    return this.formulario.get('mensaje');
  }

  get isMensajeInvalid() {
    return this.mensaje?.touched && this.mensaje?.invalid;
  }
  

}


