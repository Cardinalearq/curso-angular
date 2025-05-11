import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth-login.service';

fdescribe('AuthLoginService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('comenzar como deslogueado', () => {
    expect(service.isLoggedIn()).toBeFalse();
    expect(service.getTipoUsuario()).toBe('');
  });

  it('loguearse y definir tipo de usuario', () => {
    service.login('alumno');

    expect(service.isLoggedIn()).toBeTrue();
    expect(service.getTipoUsuario()).toBe('alumno');
  });

  it('resetear campos al desloguear', () => {
    service.login('docente');
    service.logout();

    expect(service.isLoggedIn()).toBeFalse();
    expect(service.getTipoUsuario()).toBe('');
  });

  it('emitir los valores correctos en el observable autenticado$', (done) => {
    const expectedValues = [false, true];

    let index = 0;
    service.autenticado$.subscribe(value => {
      expect(value).toBe(expectedValues[index++]);
      if (index === expectedValues.length) done();
    });

    service.login('alumno');
  });

  it('emitir los valores correctos en el observable tipoUsuario$', (done) => {
    const expectedValues = ['', 'docente'];

    let index = 0;
    service.tipoUsuario$.subscribe(value => {
      expect(value).toBe(expectedValues[index++]);
      if (index === expectedValues.length) done();
    });

    service.login('docente');
  });
});

