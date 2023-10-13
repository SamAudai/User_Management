import { CanActivateChildFn, Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject (Router); 
  return inject(ApiService).isLogIn$.pipe(
    map((isLogin:boolean)=>{
      console.log('isLogin: '+isLogin);
      if(isLogin){return isLogin}
      return router.createUrlTree(['auth/login'], {queryParams:{redirectURL:state.url}})
    })
  )
};

export const canActivateAdminChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject (Router);  
  return inject(ApiService).isAdmin$.pipe(
    map((isAdmin:boolean)=>{
      console.log('isAdmin: '+isAdmin);
      if(isAdmin){return isAdmin}
      return router.parseUrl('home');
    })
  )
};
