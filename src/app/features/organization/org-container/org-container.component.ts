import { Component, OnInit } from '@angular/core';
import {StateService} from "../../../state/state.service";
import {Observable} from "rxjs";
import {Organization} from "../org-model";

@Component({
  selector: 'tk-org-container',
  templateUrl: './org-container.component.html',
  styleUrls: ['./org-container.component.css']
})
export class OrgContainerComponent implements OnInit {

  organizations$: Observable<Organization[]>;

  constructor(private stateService: StateService){ }

  ngOnInit() {
    this.stateService.loadOrganizations();
    this.organizations$ = this.stateService.state["organizations"];
  }
}
