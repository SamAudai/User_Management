import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { map } from 'rxjs';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  const router = inject (Router);
  const api = inject(ApiService);
  return api.isLogIn$.pipe(map((isLogin:boolean)=> {
    if(isLogin){return true;}
    router.navigate(['auth/login'])
    return false;
  }))
}


