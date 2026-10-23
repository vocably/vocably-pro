import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { GoogleLanguage } from '@vocably/model';
import { getLastLanguage } from '../../../../deckStorage';
import { HeaderComponent } from '../../../header/header.component';
import { DeckListStoreService } from '../../deck-list-store.service';

@Component({
  selector: 'app-no-decks-page',
  templateUrl: './no-decks-page.component.html',
  styleUrls: ['./no-decks-page.component.scss'],
  imports: [HeaderComponent, TranslocoModule],
})
export class NoDecksPageComponent implements OnInit {
  constructor(
    deckListStore: DeckListStoreService,
    router: Router,
    route: ActivatedRoute
  ) {
    const decks = deckListStore.decks$.value;

    if (decks.length > 0) {
      const lastLanguage = getLastLanguage();
      const language =
        lastLanguage && decks.includes(lastLanguage as GoogleLanguage)
          ? lastLanguage
          : decks[0];

      router.navigate([language], {
        relativeTo: route,
        replaceUrl: true,
      });
    } else {
      router.navigate(['/welcome'], { replaceUrl: true });
    }
  }

  ngOnInit(): void {}
}
