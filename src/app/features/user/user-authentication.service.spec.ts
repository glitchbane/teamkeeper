/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAuthenticationService } from './user-authentication.service';
import {RouterTestingModule} from "@angular/router/testing";
let Auth0Lock = require('auth0-lock').default;

describe('UserAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthenticationService ],
      imports: [ RouterTestingModule]
    });
  });

  it('should ...', inject([UserAuthenticationService], (service: UserAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
