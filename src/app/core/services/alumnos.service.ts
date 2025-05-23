import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../features/students/store/students.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = environment.apiUrl + '/alumnos';

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  addAlumno(alumno: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, alumno);
  }

  updateAlumno(id: string, alumno: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, alumno);
  }

  // updateAlumno(id: string, alumno: Partial<Student>): Observable<Student> {
  //   return this.http.patch<Student>(`${this.apiUrl}/${id}`, alumno);
  // }

  deleteAlumno(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
