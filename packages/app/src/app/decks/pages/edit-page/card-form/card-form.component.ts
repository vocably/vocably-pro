import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card, CardItem } from '@vocably/model';
import { pick } from 'lodash-es';

export type CardFormEntity = Pick<
  Card,
  'source' | 'definition' | 'translation' | 'partOfSpeech'
>;

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  @Input() item!: CardItem;
  @Output() save = new EventEmitter<CardFormEntity>();
  @Output() cancel = new EventEmitter();

  model!: CardFormEntity;

  constructor() {}

  ngOnInit(): void {
    this.model = pick(this.item.data, [
      'source',
      'definition',
      'translation',
      'partOfSpeech',
    ]);
  }
}
