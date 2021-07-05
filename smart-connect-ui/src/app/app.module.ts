import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { HomeMessageComponent } from './home-message/home-message.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    HomeMessageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
