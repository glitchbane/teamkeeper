
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule} from '@angular/platform-browser';
import {DebugElement, Renderer, NO_ERRORS_SCHEMA} from '@angular/core';

import { PrimaryNavComponent } from './primary-nav.component';
import {AppComponent} from "../../../app.component";
import {UserAuthenticationService} from "../../user/user-authentication.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('PrimaryNavComponent', () => {
  let component: PrimaryNavComponent;
  let fixture: ComponentFixture<PrimaryNavComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [Renderer, UserAuthenticationService],
      declarations: [ AppComponent, PrimaryNavComponent ],
      imports: [BrowserModule, RouterTestingModule],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .overrideComponent(PrimaryNavComponent, {
        set: {
          providers: [
            {provide: UserAuthenticationService, useClass: MockAuthService}
          ]
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNavComponent);
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
