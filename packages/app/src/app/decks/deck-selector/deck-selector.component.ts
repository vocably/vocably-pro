import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deck-selector',
  templateUrl: './deck-selector.component.html',
  styleUrls: ['./deck-selector.component.scss'],
})
export class DeckSelectorComponent implements OnInit {
  @Input() languages: string[] = [];
  @Input() value: string = '';
  @Output() change = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.change.emit(event.detail.value);
  }
}
