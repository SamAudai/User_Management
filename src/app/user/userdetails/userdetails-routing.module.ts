import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveUserDetailsService } from 'src/app/guards/resolve-user-details.service';
import { UserdetailsComponent } from './userdetails.component';

const routes: Routes = [  
  {
    path: '',
    component: UserdetailsComponent,
    resolve: { userDetails: ResolveUserDetailsService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdetailsRoutingModule {
  static components = [UserdetailsComponent];
}
