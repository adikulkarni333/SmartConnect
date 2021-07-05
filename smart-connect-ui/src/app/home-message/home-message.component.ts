import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-message',
  templateUrl: './home-message.component.html',
  styleUrls: ['./home-message.component.scss']
})
export class HomeMessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  signUp(): void {
    this.router.navigate(['/sign-up']);
  }

}
