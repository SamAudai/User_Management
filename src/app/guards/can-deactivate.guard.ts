import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}
 
export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
  if(component.canDeactivate){
    return component.canDeactivate();
  }
  return true;
};

export const canDeactivateLoginGuard: CanDeactivateFn<LoginComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.form.dirty===true  && component.isSaved===false){
    return window.confirm('هل انت متاكد من المغادرة قبل تسجيل الدخول؟');
  }
  return true;
};
