import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    //this.service.logout();
    setTimeout(() => {
      this.service.logout();
    }, 1000);
  }

}
