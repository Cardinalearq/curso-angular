import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Curso } from '../../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private localCursosUrl = 'assets/data/cursos.json';
  private apiCursosUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  obtenerCursosDesdeLocal(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.localCursosUrl).pipe(
      catchError(error => {
        console.error('Error al obtener cursos locales', error);
        return of([]); // Devuelve un array vacio en caso de error
      })
    );
  }

  obtenerCursosDesdeApi(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiCursosUrl).pipe(
      catchError(error => {
        console.error('Error al obtener cursos desde API', error);
        return of([]);
      })
    );
  }

  obtenerCursosCombinados(): Observable<Curso[]> {
    return forkJoin([
      this.obtenerCursosDesdeLocal(),
      this.obtenerCursosDesdeApi()
    ]).pipe(
      map(([locales, api]) => [...locales, ...api]),
      catchError(error => {
        console.error('Error al combinar cursos', error);
        return of([]);
      })
    );
  }

  agregarCurso(curso: Curso): Observable<Curso> {
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
}


