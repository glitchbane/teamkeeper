import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrimaryNavComponent } from './features/shared/primary-nav/primary-nav.component';
import { StartComponent } from './features/start/start.component';
import {routing} from "./app.routing";
import {UserAuthenticationService} from "./features/user/user-authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
