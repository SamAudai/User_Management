import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotpagefoundComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule, 
    CoreModule,
    SharedModule          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
