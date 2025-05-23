import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth-login.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RootState } from '../../core/store';
import { UsuariosService } from '../../core/services/usuarios.service';
import { setAuthUser, unsetAuthUser } from '../../features/auth/store/auth.actions';

fdescribe('AuthService', () => {
  let service: AuthService;
  let store: MockStore<RootState>;
  let dispatchSpy: jasmine.Spy;

  const mockUsuarios = [
    { email: 'alumno@fadu.uba.ar', password: '1234', rol: 'alumno' },
    { email: 'docente@fadu.uba.ar', password: '1234', rol: 'docente' }
  ];

  const initialState: RootState = {
    auth: {
      authUser: null,
      loading: false,
      error: null
    },
  } as any; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideMockStore({ initialState }),
        {
          provide: UsuariosService,
          useValue: {} 
        }
      ]
    });

    service = TestBed.inject(AuthService);
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('deberia instanciar el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    beforeEach(() => {
      spyOn(window, 'fetch').and.resolveTo(new Response(JSON.stringify(mockUsuarios)));
    });

    it('deberia loguear correctamente un usuario valido', async () => {
      const result = await service.login('alumno@fadu.uba.ar', '1234', 'alumno');

      expect(result).toBe('success');
      expect(dispatchSpy).toHaveBeenCalledWith(
        setAuthUser({ payload: mockUsuarios[0] })
      );
    });

    it('deberia fallar con contraseña incorrecta', async () => {
      const result = await service.login('alumno@fadu.uba.ar', 'wrongpass', 'alumno');
      expect(result).toBe('invalidPassword');
      expect(dispatchSpy).not.toHaveBeenCalled();
    });

    it('deberia fallar con email incorrecto', async () => {
      const result = await service.login('otro@fadu.uba.ar', '1234', 'alumno');
      expect(result).toBe('invalidEmail');
      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });

  it('deberia desloguear correctamente', () => {
    service.logout();
    expect(dispatchSpy).toHaveBeenCalledWith(unsetAuthUser());
  });

});



