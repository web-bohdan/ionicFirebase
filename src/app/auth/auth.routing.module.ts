import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegistrationPage } from './registration/registration.page';


const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}