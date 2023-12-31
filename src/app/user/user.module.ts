import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [UserRoutingModule.components],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
