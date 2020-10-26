import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../auth.pages.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;
  constructor(
    private $fb: FormBuilder,
    public fireAuth: AngularFireAuth,
    private $nav: NavController,
    private userService: UserService,
    private authService: AuthService,
    private helperService: HelperService
    ) {
    this.LoginForm = this.$fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  async SubmitForm() {
    const {email, password} = this.LoginForm.value;
    this.helperService.LoaderActivate('Loading...');
    try {
      const loggedIn = await this.fireAuth.signInWithEmailAndPassword(email, password);
      if (loggedIn.user) {
        const user: User = {uid: loggedIn.user.uid};
        const role = await this.authService.getRole(user.uid);
        user.role = role['name'];
        this.userService.setUser = user;
        this.$nav.navigateRoot('home');
        this.helperService.LoaderStop();
      }
    } catch(e) {
      console.log(e);
    }
  }
}
