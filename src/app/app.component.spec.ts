/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {Renderer} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {AppModule} from "./app.module";
import { NO_ERRORS_SCHEMA } from '@angular/core';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [Renderer],
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', async(() => {

    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain the primary nav element', async(() => {

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('tk-primary-nav')).toBeTruthy();
  }));

});
