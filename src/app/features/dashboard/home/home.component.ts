import { Component } from '@angular/core';
import { Cursos } from '../../../shared/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { CredencialesDialogComponent } from '../../../shared/components/credenciales-dialog/credenciales-dialog.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  curso: Cursos = {
    id: 1,
    nombre: 'Diseño de interiores',
    meses: 12,
    materias: 5,
    inscripcion: new Date('2023-03-02'), 
    activo: true
  };

  constructor(private dialog: MatDialog) {}

  // Variable para controlar la visibilidad del contenido
  mostrarDetalles: boolean = false;

  // Método para alternar la visibilidad
  toggleDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }

  verCredenciales(): void {
    this.dialog.open(CredencialesDialogComponent, {
      width: '300px'
    });
  }
}

