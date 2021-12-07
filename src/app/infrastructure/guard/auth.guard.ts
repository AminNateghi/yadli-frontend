import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '@app/shared/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenValid = await this.checkToken(token);
      if (tokenValid) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  private async checkToken(token: string) {
    return await this.authService.verify({ token }).toPromise().then(result => {
      return result.success;
    });
  }
}
