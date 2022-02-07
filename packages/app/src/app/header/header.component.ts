import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'vocably-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() mini = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  async logout() {
    await this.auth.logout();
  }
}
