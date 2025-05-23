import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CursoService } from './curso.service';
import { Curso } from '../../shared/interfaces/interfaces';
import { environment } from '../../../environments/environment';

fdescribe('CursoService', () => {
  let service: CursoService;
  let httpMock: HttpTestingController;

  const apiCursosUrl = environment.apiUrl + '/cursos';
  const apiCursosSeleccionadosUrl = environment.apiUrl + '/cursosSeleccionados';

  const mockCurso: Curso = {
    id: 1,
    nombre: 'Angular Basico',
    descripcion: 'Curso de introduccion a Angular'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CursoService]
    });

    service = TestBed.inject(CursoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deberia ser creado correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('deberia obtener cursos desde la API', () => {
    service.obtenerCursosDesdeApi().subscribe(cursos => {
      expect(cursos).toEqual([mockCurso]);
    });

    const req = httpMock.expectOne(apiCursosUrl);
    expect(req.request.method).toBe('GET');
    req.flush([mockCurso]);
  });

  it('deberia agregar un curso', () => {
    service.agregarCurso(mockCurso).subscribe(curso => {
      expect(curso).toEqual(mockCurso);
    });

    const req = httpMock.expectOne(apiCursosUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockCurso);
    req.flush(mockCurso);
  });

  it('deberia eliminar un curso', () => {
    service.eliminarCurso(1).subscribe(response => {
      expect(response).toBeNull();  
    });

    const req = httpMock.expectOne(`${apiCursosUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('deberia obtener cursos seleccionados', () => {
    service.obtenerCursosSeleccionados().subscribe(cursos => {
      expect(cursos).toEqual([mockCurso]);
    });

    const req = httpMock.expectOne(apiCursosSeleccionadosUrl);
    expect(req.request.method).toBe('GET');
    req.flush([mockCurso]);
  });

  it('deberia agregar un curso seleccionado', () => {
    service.agregarCursoSeleccionado(mockCurso).subscribe(curso => {
      expect(curso).toEqual(mockCurso);
    });

    const req = httpMock.expectOne(apiCursosSeleccionadosUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockCurso);
  });

  it('deberia eliminar un curso seleccionado', () => {
    service.eliminarCursoSeleccionado(1).subscribe(resp => {
      expect(resp).toBeTruthy();
    });

    const req = httpMock.expectOne(`${apiCursosSeleccionadosUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('deberia editar un curso', () => {
    const cursoActualizado: Curso = {
      id: 1,
      nombre: 'Angular Avanzado',
      descripcion: 'Curso avanzado de Angular'
    };

    service.editarCurso(cursoActualizado).subscribe(updatedCurso => {
      expect(updatedCurso.nombre).toBe('Angular Avanzado');
    });

    const req = httpMock.expectOne(`${apiCursosUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(cursoActualizado);
    req.flush(cursoActualizado);
  });

  it('deberia editar un curso seleccionado', () => {
    const cursoActualizado: Curso = {
      id: 1,
      nombre: 'Angular Basico',
      descripcion: 'Curso actualizado'
    };

    service.editarCursoSeleccionado(cursoActualizado).subscribe(updatedCurso => {
      expect(updatedCurso.descripcion).toBe('Curso actualizado');
    });

    const req = httpMock.expectOne(`${apiCursosSeleccionadosUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(cursoActualizado);
    req.flush(cursoActualizado);
  });
});



