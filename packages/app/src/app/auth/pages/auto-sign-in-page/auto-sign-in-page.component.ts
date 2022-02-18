import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Auth } from '@aws-amplify/auth';
import { authConfig } from '../../../../auth-config';
import { merge } from 'lodash-es';

@Component({
  selector: 'app-auto-login-page',
  templateUrl: './auto-sign-in-page.component.html',
  styleUrls: ['./auto-sign-in-page.component.scss'],
})
export class AutoSignInPageComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.signIn();
  }
}
