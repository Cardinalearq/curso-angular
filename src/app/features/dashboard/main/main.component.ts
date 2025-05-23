import { Component } from '@angular/core';
import { Cursos } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  curso: Cursos = {
    id: 1,
    nombre: 'Diseño de interiores',
    meses: 12,
    materias: 5,
    inscripcion: new Date('2023-03-02'), 
    activo: true
  };

  mostrarDetalles: boolean = false;

  toggleDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
}
