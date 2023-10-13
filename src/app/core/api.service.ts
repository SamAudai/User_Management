import { Injectable } from '@angular/core';
import { ICourse } from '../models/courses';
import { IUser } from '../models/users';
import { baseURL } from "../shared/baseUrl";
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  courses!: ICourse[];
  course!: ICourse;
  users!: IUser[];
  user!: IUser;

  public isAdmin$ = new BehaviorSubject(false);
  public isLogIn$ = new BehaviorSubject(false);

  constructor(public http: HttpClient, private router: Router, private storageMap:StorageMap) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(baseURL + 'Users');
  }

  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(baseURL + 'Courses');
  }

  getUserById(id: number): Observable<IUser | any> {
    //return this.http.get<IUser>(baseURL + 'Users' + id);
    return this.getAllUsers().pipe(map(users => users.find(user => {return user.id === id })));
  }

  addNewUser() {
    return this.http.post<IUser>(baseURL + 'Users', this.user);
  }

  logIn(userName: any, password: any) {
    this.getAllUsers()
      .pipe(
        map(users => users.find(user => user.userName === userName && user.password === password)),
        catchError(error => {
          // Handle the error here, e.g., log it or display an error message.
          console.error('Error fetching users:', error);
          return of(null); // Return a new observable to continue the stream
        })
      )
      .subscribe(foundUser => {
        if (foundUser) {
          this.user= foundUser;
          this.isLogIn$.next(true);
          this.storageMap.set('id', (foundUser.id).toString()).subscribe(() => { });                                      
          if (foundUser.type === 'Admin')
            this.isAdmin$.next(true);
            localStorage.setItem('type', foundUser.type);
          
        } else {
          // Handle the case when the user is not found
          // You might want to display an error message or take another action.
          alert('User not found');
          this.router.navigateByUrl('/');
          // You could also set this.isLogIn$.next(false); here if appropriate.
        }
      });
  }

  logout(): void {
    this.isAdmin$.next(false);
    this.isLogIn$.next(false);
    this.storageMap.delete('id').subscribe(() => { });
    localStorage.clear();
    this.router.navigateByUrl('/');
  }


}
