import { Injectable } from '@angular/core';
import {Organization} from "./org-model";
import {Observable} from "rxjs";
import {orgData} from "./org-mock.data";

@Injectable()
export class OrgDataService {

  constructor() { }

  public getOrganizations(): Observable<Organization[]> {
    // call the api


    let orgs: Array<Organization> = [];
    let mockOrgs = orgData;
    let alphabetizedByName: Array<Organization>;


    alphabetizedByName = mockOrgs.sort((n1,n2) => {
      if (n1.name > n2.name) {
        return 1;
      }

      if (n1.name < n2.name) {
        return -1;
      }

      return 0;
    });


    orgs = alphabetizedByName.map(org => {
      return new Organization(
        org._id,
        org.name,
        org.location,
        org.imgPath
      );
    });

    console.log(orgs);
  return Observable.of(orgs);

  }

}
