import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth.routing.module';
import { RegistrationPage } from './registration/registration.page';
import { LoginPage } from './login/login.page';

// import { auth } from 'firebase/app';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthRoutingModule,
  ],
  declarations: [RegistrationPage, LoginPage]
})
export class AuthModule {}
