import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrimaryNavComponent } from './features/shared/primary-nav/primary-nav.component';
import { StartComponent } from './features/start/start.component';
import {routing} from "./app.routing";
import {UserAuthenticationService} from "./features/user/user-authentication.service";
import {StateService} from "./state/state.service";

import { OrgContainerComponent } from './features/organization/org-container/org-container.component';
import { OrgListComponent } from './features/organization/org-list/org-list.component';
import {OrgDataService} from "./features/organization/org-data.service";
import { TeamContainerComponent } from './features/team/team-container/team-container.component';
import { TeamListComponent } from './features/team/team-list/team-list.component';
import {TeamDataService} from "./features/team/team.data.service";

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavComponent,
    StartComponent,
    OrgContainerComponent,
    OrgListComponent,
    TeamContainerComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserAuthenticationService, StateService, OrgDataService, TeamDataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
