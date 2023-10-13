import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ResolveService {

  constructor(private api: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.getAllCourses();
  }
 
}
