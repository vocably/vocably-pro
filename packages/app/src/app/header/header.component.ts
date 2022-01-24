import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vocably-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() mini = false;

  constructor() {}

  ngOnInit(): void {}
}
