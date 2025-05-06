import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../core/services/curso.service';
import { Curso } from '../../../shared/interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-curso-creator',
  standalone: false,
  templateUrl: './curso-creator.component.html',
  styleUrls: ['./curso-creator.component.scss'],
})
export class CursoCreatorComponent implements OnInit {
  cursos: Curso[] = [];
  cursoSeleccionado?: Curso;
  cursosInscritos: Curso[] = [];
  dataSource = new MatTableDataSource<Curso>(this.cursosInscritos);
  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones'];

  nuevoCurso: Curso = {
    nombre: '',
    descripcion: ''
  };

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(): void {
    this.cursoService.obtenerCursosDesdeApi().subscribe((cursos) => {
      this.cursos = cursos;
      this.dataSource.data = cursos;
    });
  }

  agregarCurso(cursoForm: any): void {
    // Solo procesar si el formulario es válido
    if (cursoForm.valid) {
      if (this.nuevoCurso.nombre && this.nuevoCurso.descripcion) {
        this.cursoService.agregarCurso(this.nuevoCurso).subscribe(() => {
          this.obtenerCursos();
          this.nuevoCurso = { nombre: '', descripcion: '' }; // Reset values
          cursoForm.resetForm(); // Reset form validation
        });
      }
    } else {
      cursoForm.submitted = true; // Marcar el formulario como enviado
    }
  }

  eliminarCurso(id: number): void {
    this.cursoService.eliminarCurso(id).subscribe(() => {
      this.obtenerCursos();
    });
  }
}



