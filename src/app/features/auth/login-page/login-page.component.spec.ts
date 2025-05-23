import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-login.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { selectAuthUser } from '../store/auth.selectors';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

fdescribe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let store: MockStore;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,  
        MatInputModule      
      ],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectAuthUser, value: null }],
        }),
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ tipoUsuario: 'admin' }),
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar tipoUsuario desde queryParams', () => {
    expect(component.tipoUsuario).toBe('admin');
  });

  it('formulario inválido si está vacío', () => {
    expect(component.loginForm.valid).toBeFalse();
  });

  it('formulario válido con datos correctos', () => {
    component.loginForm.setValue({ email: 'test@ejemplo.com', password: '123456' });
    expect(component.loginForm.valid).toBeTrue();
  });

  it('deberia mostrar error en email si login retorna invalidEmail', fakeAsync(async () => {
    mockAuthService.login.and.resolveTo('invalidEmail');

    component.loginForm.setValue({ email: 'invalid@ejemplo.com', password: '1234' });
    await component.submit();
    tick();

    expect(component.email?.errors?.['invalidEmail']).toBeTrue();
  }));

  it('deberia mostrar error en password si login retorna invalidPassword', fakeAsync(async () => {
    mockAuthService.login.and.resolveTo('invalidPassword');

    component.loginForm.setValue({ email: 'test@ejemplo.com', password: 'bad1' });
    await component.submit();
    tick();
    fixture.detectChanges();

    expect(component.password?.errors?.['invalidPassword']).toBeTrue();
  }));

  it('deberia navegar al dashboard si login es exitoso', fakeAsync(async () => {
    mockAuthService.login.and.resolveTo('success');

    component.loginForm.setValue({ email: 'test@ejemplo.com', password: '1234' });
    await component.submit();
    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  }));

  it('cancelar() deberia navegar a /', () => {
    component.cancelar();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});


