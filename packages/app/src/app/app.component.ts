import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vocably';

  constructor(public auth: AuthService) {
    this.auth.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn === false) {
        this.auth.login();
      }
    });
  }
}
