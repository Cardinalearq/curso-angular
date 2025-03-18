import { Component } from '@angular/core';
import { Alumno } from '../../interfaces/alumno.interface';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  alumno: Alumno = {
    id: 1,
    nombre: 'Nicolas Ferraro',
    edad: 30,
    email: 'nferraro@gmail.com',
    inscripcion: new Date('2023-03-02'), 
    activo: true
  };

  // Variable para controlar la visibilidad del contenido
  mostrarDetalles: boolean = false;

  // Método para alternar la visibilidad
  toggleDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
}
