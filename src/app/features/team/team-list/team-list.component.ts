import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../team.model";

@Component({
  selector: 'tk-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  @Input() teams: Array<Team>;
  constructor() { }

  ngOnInit() {
  }

}
