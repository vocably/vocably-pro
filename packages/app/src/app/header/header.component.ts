import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { canUpdateSubscription } from '../subscription/canUpdateSubscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() mini = false;
  @Input() title = '';

  canUpdateSubscription = canUpdateSubscription;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  async signOut() {
    await this.auth.signOut();
  }
}
