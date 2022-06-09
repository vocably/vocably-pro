import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '@vocably/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item!: CardItem;

  constructor() {}

  ngOnInit(): void {}
}
