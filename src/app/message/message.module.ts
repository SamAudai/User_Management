import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MessageRoutingModule } from './message-routing.module';


@NgModule({
  declarations: [MessageRoutingModule.components],
  imports: [
    SharedModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
