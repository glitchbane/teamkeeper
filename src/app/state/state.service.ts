import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Organization} from "../features/organization/org-model";
import {OrgDataService} from "../features/organization/org-data.service";
import {Team} from "../features/team/team.model";
import {TeamDataService} from "../features/team/team.data.service";
import {isUndefined} from "util";

export class TkState {
  constructor(
    public organizations$?: Observable<Array<Organization>>,
    public teams$?: Observable<Array<Team>>
  ){}
}

@Injectable()
export class StateService {
  state: TkState = new TkState();

  constructor(
    private orgDataService: OrgDataService,
    private teamDataService: TeamDataService) {
  }

  public loadOrganizations() {
    this.state.organizations$ = this.orgDataService.getOrganizations();
  }
  public getOrganizationState(): Observable<Array<Organization>> {
    if(this.state.organizations$ == undefined || this.state.organizations$.isEmpty()) {
      this.loadOrganizations();
    }
      return this.state.organizations$;

  }

  public loadTeams() {
    this.state.teams$ = this.teamDataService.getTeams();
  }

  public getTeamState(): Observable<Array<Team>> {
    if (this.state.teams$ == undefined || this.state.teams$.isEmpty()) {
      this.loadTeams();
    }

    return this.state.teams$;
  }
}
