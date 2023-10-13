import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    AuthenticationRoutingModule.components
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ],
  exports :[
    AuthenticationRoutingModule.components
  ]
})
export class AuthenticationModule { }
