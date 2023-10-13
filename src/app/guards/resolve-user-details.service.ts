import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUser } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveUserDetailsService {

  constructor(private api: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    const id = +route.paramMap.get('id')!;
    return this.api.getUserById(id);

  }
}
