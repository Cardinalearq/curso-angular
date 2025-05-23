import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../core/services/curso.service';
import { Curso } from '../../../shared/interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import * as CursoActions from '../store/courses.actions';
import { Store } from '@ngrx/store';
import { selectCursos } from '../store/courses.selectors';
import { selectCursosSeleccionados } from '../store/courses.selectors';

@Component({
  selector: 'app-curso-selector',
  standalone: false,
  templateUrl: './curso-selector.component.html',
  styleUrls: ['./curso-selector.component.scss'],
})
export class CursoSelectorComponent implements OnInit {
  cursos: Curso[] = [];
  cursoSeleccionado?: Curso;
  cursosInscritos: Curso[] = [];
  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones']; 
  dataSource = new MatTableDataSource<Curso>(this.cursosInscritos);
  // cursosLocales : Curso[] = [];

  constructor(private store: Store, private cursoService: CursoService) { }  

  ngOnInit(): void {
    // this.cursoService.obtenerCursosDesdeLocal().subscribe((cursosLocal) => {
    //   this.cursosLocales = cursosLocal;
    // });

    this.store.dispatch(CursoActions.cargarCursos());

    this.store.select(selectCursos).subscribe(cursos => {
      this.cursos = cursos;
    });

    this.store.dispatch(CursoActions.cargarCursosSeleccionados());
    this.store.select(selectCursosSeleccionados).subscribe(seleccionados => {
      this.cursosInscritos = seleccionados;
      this.dataSource.data = [...this.cursosInscritos];
    });
  }

  seleccionarCurso(nombre: string): void {
    this.cursoSeleccionado = this.cursos.find((c) => c.nombre === nombre);
  }

  verCurso(): void {
    if (this.cursoSeleccionado) {
      const yaSeleccionado = this.cursosInscritos.some(
        (curso) => curso.nombre === this.cursoSeleccionado?.nombre
      );

      if (!yaSeleccionado) {
        // Clonar el curso, sin ID, para que el JSON Server asigne uno nuevo
        const nuevoCurso: Curso = {
          nombre: this.cursoSeleccionado.nombre,
          descripcion: this.cursoSeleccionado.descripcion,
        };

        this.store.dispatch(
          CursoActions.agregarCursoSeleccionado({ curso: nuevoCurso })
        );
      }
    }
  }

  yaInscripto(): boolean {
    return this.cursoSeleccionado
      ? this.cursosInscritos.some(c => c.nombre === this.cursoSeleccionado!.nombre)
      : false;
  }

  editarCurso(index: number): void {
    this.dataSource.data = this.dataSource.data.map((curso, i) =>
      i === index ? { ...curso, editando: true } : curso
    );
  }
  
  actualizarCurso(index: number, nuevoNombre: string): void {
    const nuevoCurso = this.cursos.find(c => c.nombre === nuevoNombre);
    if (!nuevoCurso) return;

    const cursoExistente = this.cursosInscritos[index];
    if (!cursoExistente?.id) return;

    const yaExiste = this.cursosInscritos.some((c, i) =>
      c.nombre === nuevoCurso.nombre && i !== index
    );
    if (yaExiste) {
      alert('El curso ya está agregado.');
      return;
    }

    const cursoActualizado: Curso = {
      ...cursoExistente,
      nombre: nuevoCurso.nombre,
      descripcion: nuevoCurso.descripcion,
      editando: false
    };

    this.store.dispatch(
      CursoActions.editarCursoSeleccionado({ curso: cursoActualizado })
    );
  }
  
  eliminarCurso(index: number): void {
    const cursoAEliminar = this.cursosInscritos[index];
    if (cursoAEliminar?.id) {
      this.store.dispatch(
        CursoActions.eliminarCursoSeleccionado({ id: cursoAEliminar.id })
      );
    }
  }
}




