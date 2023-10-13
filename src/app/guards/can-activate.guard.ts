import { Injectable } from '@angular/core';
import { UrlTree, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root'
})

export class CanActivateGuard {
  constructor(private router: Router, private service: ApiService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> |
    boolean |
    UrlTree {
    /* const isLogIn = this.service.isLogIn$.value;
    if (isLogIn) { return true; }
    this.router.navigate(['auth/login']);
    return false; */
     return this.service.isLogIn$.pipe(
       map((isLogIn: boolean) => {
         if (isLogIn) { return true; }
         return this.router.createUrlTree(['auth/login'], {queryParams:{redirectUrl: state.url}});
       })
     );

  }
}

@Injectable({
  providedIn: 'root'
 })
 export class CanActivateAdminGuard {
  constructor(private router: Router, private service: ApiService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean|UrlTree> |
  Promise<boolean|UrlTree> |
  boolean |
  UrlTree {
    const role:string = next.data['role'];
    const admin = localStorage.getItem('type');
    if (role === admin) {
      return true;
      }
     
    return this.router.parseUrl('/');
  }
 }
 
