import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserdetailsRoutingModule } from './userdetails-routing.module';


@NgModule({
  declarations: [UserdetailsRoutingModule.components],
  imports: [
    SharedModule,
    UserdetailsRoutingModule
  ]
})
export class UserdetailsModule { }
