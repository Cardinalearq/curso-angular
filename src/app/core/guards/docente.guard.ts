import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-login.service';

export const docenteGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  // Verificar si el usuario está autenticado
  if (!authService.isLoggedIn()) {
    alert('Debe iniciar sesión para acceder a esta sección.');
    return false;
  }

  const tipoUsuario = authService.getTipoUsuario();

  if (tipoUsuario === 'Docente') {
    return true;
  } else {
    alert('Solo los docentes pueden acceder a esta sección.');
    return false;
  }
};


