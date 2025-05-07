import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from '../../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private localCursosUrl = 'assets/data/cursos.json';
  private apiCursosUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  obtenerCursosDesdeLocal(): Observable<Curso[]> {
    return this.http.get<Curso[]>('assets/data/cursos.json');
  }
  
  obtenerCursosDesdeApi(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://localhost:3000/cursos');
  }
  
  obtenerCursosCombinados(): Observable<Curso[]> {
    return forkJoin([
      this.obtenerCursosDesdeLocal(),
      this.obtenerCursosDesdeApi()
    ]).pipe(
      map(([locales, api]) => [...locales, ...api]) // Combinar ambos arrays
    );
  }

  agregarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiCursosUrl, curso);
  }

  eliminarCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiCursosUrl}/${id}`);
  }

  editarCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiCursosUrl}/${curso.id}`, curso);
  }
  
}

