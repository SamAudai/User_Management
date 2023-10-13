import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { ApiService } from './api.service';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EditcourseComponent } from './home/editcourse/editcourse.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    EditcourseComponent
  ],
  imports: [
    SharedModule, 
    RouterModule, 
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  exports: [
    NavbarComponent,  
    AppRoutingModule
  ]
})
export class CoreModule { }
