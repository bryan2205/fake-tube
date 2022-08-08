import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../pages/public/login/login.component';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AutGuard implements CanActivate, CanDeactivate<unknown> {
  currentUser: any;
  constructor(private readonly authService: AuthService, private readonly router: Router) {
    this.authService.me().subscribe({
      next: (user) => (this.currentUser = user),
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.currentUser) {
      if (this.currentUser.level === route.data['level']) {
        return true;
      } else return this.router.navigate(['generic', 'notAuthoraized']);
    }
    return this.router.navigate(['public']);
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (nextState && nextState.url.includes('generic')) {
      return true;
    } else {
      const result = window.confirm('Sei sicuro di voler uscire?');
      if (result) {
        this.authService.logout();
        return true;
      } else return false;
    }
  }
}
