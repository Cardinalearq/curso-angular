import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno-formulario',
  standalone: false,
  templateUrl: './alumno-formulario.component.html',
  styleUrls: ['./alumno-formulario.component.css']
})
export class AlumnoFormularioComponent {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  inscripto: boolean = false;
  alumnos: { info: string, inscripto: boolean }[] = []; // Cambiamos para almacenar también el estado de inscripción
  alumnoInfo: string = '';

  constructor() {}

  imprimirInformacion(): void {
    // Crear la cadena con la información del alumno
    const alumno = {
      info: `ID: ${this.id}, Nombre: ${this.nombre}, Apellido: ${this.apellido}, 
            Edad: ${this.edad}, Inscripto: ${this.inscripto ? 'Sí' : 'No'}`,
      inscripto: this.inscripto // Almacenamos también el estado de inscripción
    };
    
    // Guardar la información en el array de alumnos
    this.alumnos.push(alumno);

    // Vaciar los campos del formulario
    this.id = 0;
    this.nombre = '';
    this.apellido = '';
    this.edad = 0;
    this.inscripto = false;
  }
}



