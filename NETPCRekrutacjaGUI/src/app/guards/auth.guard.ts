import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private router: Router, private toast: NgToastService){

  }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    if(route.data['requiresLogin']){
      if(this.auth.isLoggedIn()){
        return true
      }else{
        this.toast.error({detail:"ERROR", summary:"Please Login First!"});
        this.router.navigate(['login'])
        return false;
      }
    }
    return true;
  }

}