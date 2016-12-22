/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartComponent } from './start.component';
import {UserAuthenticationService} from "../user/user-authentication.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent ],
      providers: [ UserAuthenticationService ],
      imports: [ RouterTestingModule ]
    })
      .overrideComponent(StartComponent, {
        set: {
          providers: [
            {provide: UserAuthenticationService, useClass: MockAuthService}
          ]
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockAuthService {
  authenticated(){
    return true;
  }
}
