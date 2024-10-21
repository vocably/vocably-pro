import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Fix the weird 404 that happens for unknown reason and breaking the welcome flow
    if (['/welcome', '/page/welcome'].includes(window.location.pathname)) {
      window.location.reload();
    }
  }
}
