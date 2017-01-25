import {Routes, RouterModule} from "@angular/router";


import { ModuleWithProviders } from '@angular/core';
import {StartComponent} from "./features/start/start.component";
import {OrgContainerComponent} from "./features/organization/org-container/org-container.component";


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'organization', component: OrgContainerComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
