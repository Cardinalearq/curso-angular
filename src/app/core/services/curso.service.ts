import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursosUrl = 'assets/data/cursos.json';

  constructor(private http: HttpClient) { }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.cursosUrl) 
  }
}
