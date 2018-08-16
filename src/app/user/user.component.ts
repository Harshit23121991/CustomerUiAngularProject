import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
constructor(private apiService: AppService, private router : Router) { }
public users :User[]

  ngOnInit() {
    this.apiService.getUsers().subscribe(
           data => this.users = data);
  }


continue() {
    this.router.navigate(['employee']);
  }
 

}
