import {Routes, RouterModule} from "@angular/router";


import { ModuleWithProviders } from '@angular/core';
import {StartComponent} from "./features/start/start.component";
import {OrgContainerComponent} from "./features/organization/org-container/org-container.component";
import {teamRoutes} from "./team-routes";


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'organization', component: OrgContainerComponent},
  // {path: 'team', component: TeamContainerComponent, children: teamRoutes}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
