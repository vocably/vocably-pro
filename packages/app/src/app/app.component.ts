import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'vocably-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
