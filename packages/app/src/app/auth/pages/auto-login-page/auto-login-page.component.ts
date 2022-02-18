import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auto-login-page',
  templateUrl: './auto-login-page.component.html',
  styleUrls: ['./auto-login-page.component.scss'],
})
export class AutoLoginPageComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.login();
  }
}
