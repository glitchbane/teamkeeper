import { Component, OnInit } from '@angular/core';
import {UserAuthenticationService} from "../user/user-authentication.service";

@Component({
  selector: 'tk-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private authService: UserAuthenticationService) { }

  ngOnInit() {
  }

  submitLogin(){
    this.authService.login();
  }
}
