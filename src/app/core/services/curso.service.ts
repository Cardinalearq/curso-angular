import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from '../../shared/interfaces/interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private apiCursosUrl = environment.apiUrl + '/cursos';
  private apiCursosSeleccionadosUrl = environment.apiUrl + '/cursosSeleccionados'

  constructor(private http: HttpClient) {}

  obtenerCursosDesdeApi(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiCursosUrl).pipe(
      catchError(error => {
        console.error('Error al obtener cursos desde API', error);
        return of([]);
      })
    );
  }

  agregarCurso(curso: Omit<Curso, 'id'>): Observable<Curso> {
    return this.http.post<Curso>(this.apiCursosUrl, curso).pipe(
      catchError(error => {
        console.error('Error al agregar curso', error);
        throw error; 
      })
    );
  }

  eliminarCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiCursosUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error al eliminar curso', error);
        throw error;
      })
    );
  }

  editarCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiCursosUrl}/${curso.id}`, curso).pipe(
      catchError(error => {
        console.error('Error al editar curso', error);
        throw error;
      })
    );
  }

  obtenerCursosSeleccionados(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiCursosSeleccionadosUrl);
  }

  agregarCursoSeleccionado(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiCursosSeleccionadosUrl, curso);
  }

  editarCursoSeleccionado(curso: Curso): Observable<any> {
    return this.http.put(`${this.apiCursosSeleccionadosUrl}/${curso.id}`, curso);
  }

  eliminarCursoSeleccionado(id: number): Observable<any> {
    return this.http.delete(`${this.apiCursosSeleccionadosUrl}/${id}`);
  }
}


