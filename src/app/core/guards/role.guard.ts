import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth-login.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const currentRole = this.auth.getUserRole();

    if (currentRole !== expectedRole) {
      alert('No tienes permisos para acceder a esta sección.');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

