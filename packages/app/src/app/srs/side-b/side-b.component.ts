import { Component, Input, OnInit } from '@angular/core';
import { explode } from '@vocably/sulna';
import { CardItem } from '@vocably/model';

type DefinitionItem = {
  text: string;
  class: string;
};

@Component({
  selector: 'app-side-b',
  templateUrl: './side-b.component.html',
  styleUrls: ['./side-b.component.scss'],
})
export class SideBComponent implements OnInit {
  @Input() item!: CardItem;
  public definitions: DefinitionItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.definitions = explode(this.item.data.definition).map((text) => ({
      text,
      class: '',
    }));

    if (this.item.data.translation) {
      this.definitions.push({
        class: 'muted italic',
        text: this.item.data.translation,
      });
    }
  }
}
