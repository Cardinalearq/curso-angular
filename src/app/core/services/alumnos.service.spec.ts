import { TestBed } from '@angular/core/testing';
import { AlumnosService } from './alumnos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { Student } from '../../features/students/store/students.model';

fdescribe('AlumnosService', () => {
  let service: AlumnosService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl + '/alumnos';

  const mockAlumno: Student = {
    id: '1',
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 21,
    email: 'juan@example.com',
    mensaje: 'Interesado en Angular',
    inscripto: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlumnosService]
    });

    service = TestBed.inject(AlumnosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería ser creado correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener todos los alumnos', () => {
    service.getAlumnos().subscribe(alumnos => {
      expect(alumnos.length).toBe(1);
      expect(alumnos[0]).toEqual(mockAlumno);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush([mockAlumno]);
  });

  it('debería eliminar un alumno', () => {
    service.deleteAlumno('1').subscribe(response => {
      expect(response).toBeNull();  // Ajusta acá a null porque flush(null) retorna null
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('debería actualizar un alumno', () => {
    const alumnoActualizado: Student = {
      ...mockAlumno,
      mensaje: 'Actualizado',
      inscripto: false
    };

    service.updateAlumno('1', alumnoActualizado).subscribe(updated => {
      expect(updated.mensaje).toBe('Actualizado');
      expect(updated.inscripto).toBeFalse();
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT'); // ✅ CAMBIADO A PUT
    expect(req.request.body).toEqual(alumnoActualizado); // ✅ objeto completo
    req.flush(alumnoActualizado);
  });
});



