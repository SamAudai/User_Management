import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../models/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  user$: IUser;
  id!: number;

  constructor(public service: ApiService, private activeRouter: ActivatedRoute, private router: Router) {
    this.user$ = {
      id: 0,
      userName: '',
      fullName: '',
      password: '',
      city: '',
      type: ''
    }
  }

  ngOnInit(): void {
    this.id = +this.activeRouter.snapshot.params['id']
    this.subscription = this.service.getUserById(this.id).subscribe(user => {
      this.user$ = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
