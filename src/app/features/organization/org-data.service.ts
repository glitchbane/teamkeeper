import { Injectable } from '@angular/core';
import {Organization} from "./org-model";
import {Observable} from "rxjs";

@Injectable()
export class OrgDataService {

  constructor() { }

  public getOrganizations(): Observable<Organization[]> {
    // call the api

  let orgs: Organization[] = [
    new Organization( '123', 'Voyager', 'Bellevue'),
    new Organization( '234', 'VCI', 'Bellevue'),
  ];

  return Observable.of(orgs);

  }

}
