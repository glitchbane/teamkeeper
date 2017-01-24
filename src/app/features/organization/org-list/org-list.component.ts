import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'tk-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {
@Input() organizations;

  constructor() { }

  ngOnInit() {
  }

}
