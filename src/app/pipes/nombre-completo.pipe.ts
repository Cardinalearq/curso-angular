import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from '../interfaces/interfaces';

@Pipe({
  name: 'nombreCompleto',
  standalone: false
})
export class NombreCompletoPipe implements PipeTransform {

  transform(alumno: Alumnos, ...args: unknown[]): string {
    const capitalizar = (texto: string): string => {
      return texto
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
    };

    const nombre = capitalizar(alumno.nombre || '');
    const apellido = capitalizar(alumno.apellido || '');
    return `${nombre} ${apellido}`.trim();
  };
}

