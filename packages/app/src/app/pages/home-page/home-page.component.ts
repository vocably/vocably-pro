import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isLoggedIn = false;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth
      .isLoggedIn()
      .subscribe((isLoggedIn) => (this.isLoggedIn = isLoggedIn));
  }
}
