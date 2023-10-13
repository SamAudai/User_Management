import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/users';
import { ApiService } from '../core/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersList$!: Observable<IUser[]>;
  fullUsersList$!: Observable<IUser[]>;
  inputSearch!: string|any;
 

  constructor(private api: ApiService, private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.usersList$ = this.api.getAllUsers();
    this.fullUsersList$ = this.api.getAllUsers();
    this.inputSearch = this.activatedRout.snapshot.queryParamMap.get('searchText');
  }

}
