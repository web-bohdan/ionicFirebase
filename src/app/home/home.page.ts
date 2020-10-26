import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  Role: string;

  constructor(
    public userService: UserService,
    ) {}

  ngOnInit() {
    this.Role = this.userService.getUser.role;
  }

}
