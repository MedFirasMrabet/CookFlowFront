import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageManagerService } from './services/local-storage-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private localStorageManagerService: LocalStorageManagerService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const isAuthenticated = this.localStorageManagerService.isAuthenticated(); // assuming the AuthService has an isAuthenticated method

      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigate(['/login']);  // redirect to login page if not authenticated
        return false;
      }
  }
}
