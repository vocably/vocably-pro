import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Answer } from '../card/card.component';
import { Subject } from 'rxjs';
import { CardItem } from '@vocably/model';

@Component({
  selector: 'vocably-srs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('displayComponent', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class ListComponent {
  @Input() cards!: CardItem[];

  flip$ = new Subject();
  answer$ = new Subject<Answer>();

  onAnswer(answer: Answer) {
    this.cards = this.cards.slice(1);
  }
}
