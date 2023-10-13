import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { SignupComponent } from './signup.component';

const routes: Routes = [  
  { path: '', canDeactivate: [canDeactivateGuard], component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {
  static components = [SignupComponent];
 }
