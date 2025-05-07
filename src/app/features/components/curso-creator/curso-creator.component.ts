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

  isEdit = false;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(): void {
    this.cursoService.obtenerCursosDesdeApi().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
        this.dataSource.data = cursos;
      },
      error: (error) => {
        console.error('Error al obtener cursos:', error);
      }
    });
  }

  agregarCurso(cursoForm: any): void {
    if (cursoForm.valid) {
      if (this.isEdit && this.nuevoCurso.id) {
        this.cursoService.editarCurso(this.nuevoCurso).subscribe({
          next: () => {
            this.obtenerCursos();
            this.resetearFormulario(cursoForm);
          },
          error: (error) => {
            console.error('Error al editar el curso:', error);
          }
        });
      } else {
        this.cursoService.agregarCurso(this.nuevoCurso).subscribe({
          next: () => {
            this.obtenerCursos();
            this.resetearFormulario(cursoForm);
          },
          error: (error) => {
            console.error('Error al agregar el curso:', error);
          }
        });
      }
    } else {
      cursoForm.submitted = true;
    }
  }

  editarSeleccion(curso: Curso): void {
    this.nuevoCurso = { ...curso }; 
    this.isEdit = true;
  }

  eliminarCurso(id: number): void {
    this.cursoService.eliminarCurso(id).subscribe({
      next: () => {
        this.obtenerCursos();
      },
      error: (error) => {
        console.error('Error al eliminar el curso:', error);
      }
    });
  }

  resetearFormulario(form: any): void {
    this.nuevoCurso = { nombre: '', descripcion: '' };
    this.isEdit = false;
    form.resetForm();
  }
}



