import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, flatMap } from 'rxjs/operators';
import { Role, User } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db: AngularFirestore, private fireAuth: AngularFireAuth, private userService: UserService) { }

  Login(email: string, password: string) {

  }
  async IsAuthenticated(){
    console.log(this.userService.getUser);
    if (this.userService.getUser) return true;
    const userCurrent = await this.fireAuth.authState.pipe(first()).toPromise();
    if (userCurrent) {
      const user: User = {
        uid: userCurrent.uid
      };
      const role = await this.getRole(userCurrent.uid);
      user.role = role['name'];
      if (role) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  setRole(uid: string, role: string) {
    this.db.doc(`role/${uid}`).set({
      name: role
    });
  }

  getRole(uid: string): Promise<{}> {
    return this.db.doc(`role/${uid}`).valueChanges().pipe(first()).toPromise();
  }

}
