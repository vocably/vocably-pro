import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@aws-amplify/auth';

@Component({
  selector: 'vocably-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() mini = false;

  constructor() {}

  ngOnInit(): void {}

  async logOut() {
    await Auth.signOut();
  }
}
