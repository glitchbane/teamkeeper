
import {Injectable} from "@angular/core";
import { tokenNotExpired } from 'angular2-jwt';
import { tkConfig } from './user-authentication.config';
import {Router} from "@angular/router";


declare var Auth0Lock: any;

@Injectable()
export class UserAuthenticationService {

  // Configure Auth0
  userProfile: Object;

  lock = new Auth0Lock (tkConfig.clientID, tkConfig.domain, {
      avatar: null,
      theme: {
        primaryColor: "#69BE28",
        foregroundColor: "#000000"
      },
      languageDictionary: {
        title: "GCO TeamKeeper"
      }
    }
  );

  constructor(
    private router: Router) {

    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated',  (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));

        this.userProfile = profile;

        this.router.navigate(['studios']);

      });
    })
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;

    this.router.navigate(['/start']);
  };
}
