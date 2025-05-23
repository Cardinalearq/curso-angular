import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../../shared/interfaces/interfaces';
import * as CursoActions from '../store/courses.actions';
import { selectCursos } from '../store/courses.selectors';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  nuevoCurso: Curso = { nombre: '', descripcion: '' };
  isEdit = false;

  constructor(
    private store: Store, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CursoActions.cargarCursos());

    this.store.select(selectCursos).subscribe(cursos => {
      this.dataSource.data = cursos;
    });
  }

  agregarCurso(cursoForm: any): void {
    if (cursoForm.valid) {
      if (this.isEdit && this.cursoSeleccionado?.id) {
        // Agregamos manualmente el ID para el PATCH
        this.store.dispatch(
          CursoActions.editarCurso({
            curso: { id: this.cursoSeleccionado.id, ...this.nuevoCurso }
          })
        );
      } else {
        this.store.dispatch(CursoActions.agregarCurso({ curso: this.nuevoCurso }));
      }
      this.resetearFormulario(cursoForm);
    } else {
      cursoForm.submitted = true;
    }
  }

  editarSeleccion(curso: Curso): void {
    this.nuevoCurso = { nombre: curso.nombre, descripcion: curso.descripcion };
    this.isEdit = true;

    // Guardamos el ID en una variable separada para la edición
    this.cursoSeleccionado = curso;
  }

  eliminarCurso(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { mensaje: '¿Estás seguro de que deseas eliminar este curso?' }
    });

    dialogRef.afterClosed().subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.store.dispatch(CursoActions.eliminarCurso({ id }));
        this.snackBar.open('Curso eliminado correctamente', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
      }
    });
  }

  resetearFormulario(form: any): void {
    this.nuevoCurso = { nombre: '', descripcion: '' };
    this.isEdit = false;
    form.resetForm();
  }
}




