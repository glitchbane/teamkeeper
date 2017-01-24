import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Organization} from "../features/organization/org-model";
import {OrgDataService} from "../features/organization/org-data.service";

@Injectable()
export class StateService {
  state: Object = {
    organizations: []
  };

  constructor(private orgDataService: OrgDataService) {
  }

  public loadOrganizations() {
    this.state["organizations"] = this.orgDataService.getOrganizations();
  }
}
