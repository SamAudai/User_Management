import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [SignupRoutingModule.components],
  imports: [
    SharedModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
