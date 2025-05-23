import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../core/services/curso.service';
import { Curso } from '../../../shared/interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import * as CursoActions from '../store/courses.actions';
import { Store } from '@ngrx/store';
import { selectCursos } from '../store/courses.selectors';

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
  cursosLocales : Curso[] = [];

  constructor(private store: Store, private cursoService: CursoService) { }  

  ngOnInit(): void {
    this.cursoService.obtenerCursosDesdeLocal().subscribe((cursosLocal) => {
      this.cursosLocales = cursosLocal;
    });

    this.store.dispatch(CursoActions.cargarCursos());

    this.store.select(selectCursos).subscribe(cursos => {
      this.cursos = [...this.cursosLocales, ...cursos];
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
        this.cursosInscritos.push(this.cursoSeleccionado);
        this.dataSource.data = [...this.cursosInscritos]; // Actualizar la tabla
      }
    }
  }

  yaInscripto(): boolean {
    return this.cursoSeleccionado
      ? this.cursosInscritos.some(c => c.nombre === this.cursoSeleccionado!.nombre)
      : false;
  }

  editarCurso(index: number): void {
    this.cursosInscritos[index] = {
      ...this.cursosInscritos[index],
      editando: true,
    };
    this.dataSource.data = [...this.cursosInscritos];
  }
  
  actualizarCurso(index: number, nuevoNombre: string): void {
    const nuevoCurso = this.cursos.find(c => c.nombre === nuevoNombre);
  
    if (!nuevoCurso) return;
    // Valido si ya existe otro curso con el mismo nombre
    const yaExiste = this.cursosInscritos.some((c, i) =>
      c.nombre === nuevoCurso.nombre && i !== index
    );
    if (yaExiste) {
      alert('El curso ya está agregado en la tabla.');
      return;
    }
    // Si no existe, actualizarlo
    this.cursosInscritos[index] = {
      ...nuevoCurso,
      editando: false,
    };
    this.dataSource.data = [...this.cursosInscritos];
  }
  
  eliminarCurso(index: number): void {
    this.cursosInscritos.splice(index, 1);
    this.dataSource.data = [...this.cursosInscritos];
  }
}




