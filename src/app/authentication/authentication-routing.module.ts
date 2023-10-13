import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: AuthenticationComponent },
      { path: 'signout', component: SignoutComponent },
      { 
        path: 'login',
        loadChildren: ()=> import('./login/login.module').then(module=> module.LoginModule) 
      },
      { 
        path: 'signup',
        loadChildren: ()=> import('./signup/signup.module').then(module=> module.SignupModule) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
  static components = [
    SignoutComponent,
    AuthenticationComponent
  ];
    
}
