import {Routes, RouterModule} from "@angular/router";


import { ModuleWithProviders } from '@angular/core';
import {StartComponent} from "./features/start/start.component";


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
