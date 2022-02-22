import { Component, Input, OnInit } from '@angular/core';
import { explode } from '@vocably/sulna';

@Component({
  selector: 'ul[definition]',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  host: {
    '[class.unstyled]': 'items.length <= 1',
  },
})
export class DefinitionComponent implements OnInit {
  @Input() definition: string = '';

  public items: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = explode(this.definition);
  }
}
