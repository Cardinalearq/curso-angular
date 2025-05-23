import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth-login.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RootState } from '../../core/store';
import { UsuariosService } from '../../core/services/usuarios.service';
import { setAuthUser, unsetAuthUser } from '../../features/auth/store/auth.actions';
import { Usuario } from '../../shared/interfaces/interfaces';

fdescribe('AuthService', () => {
  let service: AuthService;
  let store: MockStore<RootState>;
  let dispatchSpy: jasmine.Spy;

  const mockUsuarios = [
    { email: 'alumno@fadu.uba.ar', password: '1234', rol: 'alumno' },
    { email: 'docente@fadu.uba.ar', password: '1234', rol: 'docente' }
  ];

  // Define aquí un estado inicial básico con authUser definido como null
  const initialState: RootState = {
    auth: {
      authUser: null,
      loading: false,
      error: null
    },
    // Si tienes otros slices del estado, agregalos también acá
  } as any; // Usamos 'as any' para evitar problemas si RootState tiene más propiedades

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideMockStore({ initialState }),
        {
          provide: UsuariosService,
          useValue: {} // No usado directamente en este servicio por ahora
        }
      ]
    });

    service = TestBed.inject(AuthService);
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('debería instanciar el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    beforeEach(() => {
      // Mock global fetch
      spyOn(window, 'fetch').and.resolveTo(new Response(JSON.stringify(mockUsuarios)));
    });

    it('debería loguear correctamente un usuario válido', async () => {
      const result = await service.login('alumno@fadu.uba.ar', '1234', 'alumno');

      expect(result).toBe('success');
      expect(dispatchSpy).toHaveBeenCalledWith(
        setAuthUser({ payload: mockUsuarios[0] })
      );
    });

    it('debería fallar con contraseña incorrecta', async () => {
      const result = await service.login('alumno@fadu.uba.ar', 'wrongpass', 'alumno');
      expect(result).toBe('invalidPassword');
      expect(dispatchSpy).not.toHaveBeenCalled();
    });

    it('debería fallar con email incorrecto', async () => {
      const result = await service.login('otro@fadu.uba.ar', '1234', 'alumno');
      expect(result).toBe('invalidEmail');
      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });

  it('debería desloguear correctamente', () => {
    service.logout();
    expect(dispatchSpy).toHaveBeenCalledWith(unsetAuthUser());
  });

});



