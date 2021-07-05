import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMessageComponent } from './home-message/home-message.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeMessageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
