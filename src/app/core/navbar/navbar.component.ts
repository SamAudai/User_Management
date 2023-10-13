import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id!: any;
  IsSignedIn = false;
  IsAdmin = false;

  constructor(private storageMap: StorageMap, private api: ApiService) { }

  ngOnInit(): void {

    this.api.isAdmin$.subscribe(val => {
      this.IsAdmin = val;
    });
    this.api.isLogIn$.subscribe(val => {
      this.IsSignedIn = val;
    });

    this.storageMap.watch('id').subscribe((id: any) => {
      this.id = id;
    });
  }

}
