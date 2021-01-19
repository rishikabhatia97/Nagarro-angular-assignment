import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      name: 'Arun Gupta',
      username: '@arungupta',
      email: 'arun@gmail.com',
    },
    {
      name: 'Varun Sharma',
      username: '@vsharma',
      email: 'varun@gmail.com',
    },
    {
      name: 'Anuj Kumar',
      username: '@akumar',
      email: 'anuj@gmail.com',
    },
  ];
  // users: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
