import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard, CanActivateAdminGuard } from '../guards/can-activate.guard';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [    
  {
    path: '', canActivate: [CanActivateGuard, CanActivateAdminGuard],
    data: { role: 'Admin' },
    children: [
      { path: '', component: UserComponent },
      { path: 'user_list', component: UserlistComponent },
      {
        path: 'user_details/:id',
        loadChildren: ()=> import('./userdetails/userdetails.module').then(module=> module.UserdetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  static components = [
    UserComponent,
    UserlistComponent
  ];
    
}
