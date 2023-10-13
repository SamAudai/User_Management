import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canDeactivateLoginGuard } from 'src/app/guards/can-deactivate.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [  
  { path: '', canDeactivate: [canDeactivateLoginGuard], component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
  static components = [LoginComponent];
 }
