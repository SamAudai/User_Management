import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  msg!: string;
  closed = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getMessage();
  } 

  close(): void {
    this.closed = true;
    //this.msg = '';
    this.router.navigate( [ { outlets: { primary: [ 'home' ], msg: null } } ]);
  }

  open(): void {
    this.getMessage();
    this.closed = false;
    this.router.navigate([{outlets: {msg: ['messages']}}]);
  }

  getMessage(): void {
    this.api.isLogIn$.subscribe(LogIn => {
      if (LogIn) {
        const user = this.api.user;
        const currentDate = new Date();
        const date = currentDate.toDateString();
        const time = currentDate.toLocaleTimeString();
        this.msg = `Hi ( ${user.fullName} ) Logged in at: ${date} - ${time}`;
      }
    });
  }

}
