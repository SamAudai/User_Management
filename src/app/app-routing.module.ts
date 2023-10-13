import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { EditcourseComponent } from './core/home/editcourse/editcourse.component';
import { canActivateAdminChildGuard, canActivateChildGuard } from './guards/can-activate-child.guard';
import { ResolveService } from './guards/resolve.service';
import { canLoadGuard } from './guards/can-load.guard';
import { CustomPreloadingService } from './services/custom-preloading.service';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    resolve: { courses: ResolveService },
    canActivateChild: [canActivateChildGuard, canActivateAdminChildGuard],
    children: [
      { path: 'edit_courses', component: EditcourseComponent },
    ]
  },
  { 
    path: 'messages', outlet: 'msg',
    data: { preload: true },
    loadChildren: ()=> import('./message/message.module').then(module=> module.MessageModule)  
  },
  { 
    path: 'profile/:id',
    canLoad: [canLoadGuard],
    loadChildren: ()=> import('./profile/profile.module').then(module=> module.ProfileModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./authentication/authentication.module').then(module=> module.AuthenticationModule)
  },
  {
    path: 'users',
    data: { preload: true },
    loadChildren: ()=> import('./user/user.module').then(module=> module.UserModule)
  },  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
