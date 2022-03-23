import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  isActive,
  isCancelled,
  isUnsubscribed,
} from '../subscription/subscriptionStatus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() mini = false;
  @Input() title = '';

  isActive = isActive;
  isCancelled = isCancelled;
  isUnsubscribed = isUnsubscribed;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  async signOut() {
    await this.auth.signOut();
  }
}
