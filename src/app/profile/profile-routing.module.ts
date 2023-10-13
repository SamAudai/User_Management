import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CanActivateGuard } from '../guards/can-activate.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [  
  { path: '', component: ProfileComponent, /* canActivate: [CanActivateGuard] */ }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
