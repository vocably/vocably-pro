import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardItem } from '@vocably/model';
import { SrsScore } from '@vocably/srs';
import { CardComponent } from '../card/card.component';
import { FrontComponent } from '../front/front.component';
import { BackComponent } from '../back/back.component';

@Component({
  selector: 'app-srs-card-sf',
  imports: [CardComponent, FrontComponent, BackComponent],
  templateUrl: './card-sf.component.html',
  styleUrl: './card-sf.component.scss',
})
export class CardSfComponent {
  @Input() card!: CardItem;
  @Output() grade = new EventEmitter<SrsScore>();
}
