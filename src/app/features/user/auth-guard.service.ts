

import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserAuthenticationService} from "./user-authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: UserAuthenticationService, private router: Router) {}

  canActivate() {
    if (!this.auth.authenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
