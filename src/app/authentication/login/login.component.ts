import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription, map } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id!: number;
  subscription!: Subscription;
  user$!: IUser;
  path!: string;
  //form: any;
  isSaved = false;
  @ViewChild('form') form!: NgForm;


  constructor(private service: ApiService, private router: Router,
    private activeRouter: ActivatedRoute, private storageMap: StorageMap,) { }

  ngOnInit(): void {
    if (this.activeRouter.snapshot.queryParams['redirectUrl']) {
      this.path = this.activeRouter.snapshot.queryParams['redirectUrl'];
    } else {
      this.path = '';
    }
  }

  onSubmit(form: NgForm) {
    const userName = form.control.get('userName')?.value;
    const password = form.control.get('password')?.value;
    this.service.logIn(userName, password);
    this.storageMap.get('id').subscribe((id) => {
      if (this.path === '') {
        this.router.navigate(['/home']);
      } else if (this.path === '/users' || this.path === '/home/edit-courses') {
        this.router.navigate([`/${this.path}`]);
      } else {
        const path = this.path.split('/');
        this.router.navigate([`/${path[1]}/${id}`]);
      }
    });
    this.router.navigate([{ outlets: { msg: ['messages'] } }]);
    this.isSaved = true;

  }

}
