import { Injectable } from '@angular/core';
import {Team} from "./team.model";
import {Observable} from "rxjs";
import {teamData} from "./team.mock.data";

@Injectable()
export class TeamDataService {

  constructor() { }

  public getTeams(): Observable<Array<Team>> {
    // call the api


    let mockTeams = teamData;
    let alphabetizedByName: Array<Team>;


    alphabetizedByName = mockTeams.sort((n1,n2) => {
      if (n1.name > n2.name) {
        return 1;
      }

      if (n1.name < n2.name) {
        return -1;
      }

      return 0;
    });


    let teams = alphabetizedByName.map(team => {
      return new Team(
        team._id,
        team.organizationId,
        team.name
        // team.imageUrl,
        // team.inceptionDate,
        // team.disbandedDate
      );
    });

    console.log(teams);
    return Observable.of(teams);

  }

}
