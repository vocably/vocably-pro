import { Component, Input, OnInit } from '@angular/core';
import { explode } from '@vocably/sulna';

@Component({
  selector: 'ul[sideB]',
  templateUrl: './side-b.component.html',
  styleUrls: ['./side-b.component.scss'],
  host: {
    '[class.unstyled]': 'items.length <= 1',
  },
})
export class SideBComponent implements OnInit {
  @Input() sideB: string = '';

  public items: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = explode(this.sideB);
  }
}
