import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router){ }
  
  canActivate(): boolean{
    if(this._authService.loggedIn()){
      return false;
    }else{
      return true;
    }
  }
  
}
