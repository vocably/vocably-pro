import { Component, OnInit } from '@angular/core';
import { DeckStoreService } from '../../deck-store.service';

@Component({
  selector: 'vocably-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor(public deckStore: DeckStoreService) {}

  ngOnInit(): void {}
}
