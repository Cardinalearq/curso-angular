import { Injectable } from '@angular/core';
import { Alumnos } from '../../shared/interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumnos[] = [];
  private alumnosSubject = new BehaviorSubject<Alumnos[]>(this.alumnos);

  alumnos$ = this.alumnosSubject.asObservable();

  agregarAlumno(alumno: Alumnos) {
    this.alumnos.push(alumno);
    this.alumnosSubject.next([...this.alumnos]);
  }

  eliminarAlumno(index: number) {
    this.alumnos.splice(index, 1);
    this.alumnosSubject.next([...this.alumnos]);
  }

  editarAlumno(index: number, alumno: Alumnos) {
    this.alumnos[index] = alumno;
    this.alumnosSubject.next([...this.alumnos]);
  }
}
