import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit, OnDestroy, AfterViewChecked { 
  user$: IUser;
  subscription!: Subscription;
  id!: number;
  usersSum!: number;

  constructor(private activeRouter: ActivatedRoute, private api: ApiService, private router: Router) { 
    this.user$={
      id:0,
      userName:'',
      fullName:'',
      password:'',
      city:'',
      type:''
    }
    this.api.getAllUsers().subscribe( data => {
      this.usersSum = data.length;
      });
  }

  ngOnInit(): void {
    /* this.id = +this.activeRouter.snapshot.params['id'];
    this.subscription = this.api.getUserById(this.id).subscribe(user => {
      this.user$ = user
    }); */

   /*  this.activeRouter.paramMap.subscribe(param=> {
      this.id= +param.get('id')!;
      this.subscription = this.api.getUserById(this.id).subscribe(res=> {
        this.user$ = res!;
      })
    }) */

    this.subscription = this.activeRouter.data.subscribe(res=>{
      this.user$ = res['userDetails'];
      this.id = +this.user$.id
    })
  }

  ngAfterViewChecked(): void {
    const fragmentParam= this.activeRouter.snapshot.fragment;
    if (fragmentParam) {
       const elementId= document.getElementById(fragmentParam)!;
      elementId.scrollIntoView();
    }
  }

  viewNextUser(){
   /*  this.subscription = this.api.getAllUsers().subscribe(data => {
       this.id === data.length ? this.id = 1 : this.id = this.id + 1;
       
    }); */
    this.id===this.usersSum? this.id= 1: this.id++;
    this.router.navigate(['users/user_details', this.id], {
      queryParamsHandling: 'preserve' // 'marge' 'null'
    }); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
