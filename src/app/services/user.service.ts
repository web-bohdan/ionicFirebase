import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
  constructor() { }

  get getUser(): User {
    return this.user;
  }
  set setUser(user: User) {
    this.user = user;
  }
}
