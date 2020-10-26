import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['../auth.pages.scss'],
})
export class RegistrationPage implements OnInit {
  RegistrationForm: FormGroup;
  constructor(
    private $fb: FormBuilder,
    private $nav: NavController,
    public fireAuth: AngularFireAuth,
    private authService: AuthService,
    private userService: UserService,
    ) {
    this.RegistrationForm = this.$fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required],
      seller: [false, Validators.required],
    });
  }

  ngOnInit() {}

  async SubmitForm() {
    const {email, password, seller, name} = this.RegistrationForm.value;
    const role = seller ? 'seller' : 'customer';
    try {
      const res = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      if (res.user){
        this.authService.setRole(res.user.uid, role);
        this.userService.setUser = {
          uid: res.user.uid,
          role,
        }
        this.$nav.navigateRoot('home');
      }
    } catch(e) {
      console.dir(e);
    }
  }
}
