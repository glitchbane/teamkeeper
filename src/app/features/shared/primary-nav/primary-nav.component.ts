import { Component, OnInit } from '@angular/core';
import {UserAuthenticationService} from "../../user/user-authentication.service";

@Component({
  selector: 'tk-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  constructor(private auth: UserAuthenticationService) { }

  ngOnInit() {
  }

}
