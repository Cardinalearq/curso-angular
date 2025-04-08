import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno-formulario',
  standalone: false,
  templateUrl: './alumno-formulario.component.html',
  styleUrls: ['./alumno-formulario.component.scss']
})
export class AlumnoFormularioComponent {
  id: number | null = null; // Iniciar con null
  nombre: string | null = null; // Iniciar con null
  apellido: string | null = null; // Iniciar con null
  edad: number | null = null; // Iniciar con null
  inscripto: boolean = false; 
  alumnos: { info: string, inscripto: boolean }[] = [];

  constructor() {}

  imprimirInformacion(): void {
    // Crear la cadena con la información del alumno
    const alumno = {
      info: `ID: ${this.id}, Nombre: ${this.nombre}, Apellido: ${this.apellido}, 
            Edad: ${this.edad}, Inscripto: ${this.inscripto ? 'Sí' : 'No'}`,
      inscripto: this.inscripto // Almacenar el estado de inscripción
    };
    
    // Guardar la información en el array de alumnos
    this.alumnos.push(alumno);

    // Vaciar los campos del formulario
    this.id = null;
    this.nombre = null;
    this.apellido = null;
    this.edad = null;
    this.inscripto = false;
  }

  eliminarAlumno(index: number): void {
    // Eliminar el alumno en la posición 'index' del array 'alumnos'
    this.alumnos.splice(index, 1);
  }
}



