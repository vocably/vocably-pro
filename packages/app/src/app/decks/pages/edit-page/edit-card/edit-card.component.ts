import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardItem } from '@vocably/model';

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

  constructor() {}

  ngOnInit(): void {}
}
