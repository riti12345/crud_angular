import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users=[]
  constructor() { }

  ngOnInit(): void {
  	this.users = JSON.parse(localStorage.getItem("loginForm"));
  }

}
