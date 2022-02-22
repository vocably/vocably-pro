import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardItem } from '@vocably/model';
import { CardFormEntity } from '../card-form/card-form.component';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
})
export class EditCardComponent implements OnInit {
  @Input() item!: CardItem;
  @Input() isDeleted = false;
  @Output() delete = new EventEmitter();
  @Output() restore = new EventEmitter();
  @Output() save = new EventEmitter<CardItem>();

  isEdit = false;

  constructor() {}

  ngOnInit(): void {}

  onSave(entityValues: CardFormEntity) {
    this.save.emit({
      ...this.item,
      data: {
        ...this.item.data,
        ...entityValues,
      },
    });

    this.isEdit = false;
  }
}
