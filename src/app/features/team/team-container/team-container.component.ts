import { Component, OnInit } from '@angular/core';
import {StateService} from "../../../state/state.service";
import {Observable} from "rxjs";
import {Team} from "../team.model";

@Component({
  selector: 'tk-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.css']
})
export class TeamContainerComponent implements OnInit {
  team$: Observable<Array<Team>>;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.team$ = this.state.getTeamState();
  }

}
