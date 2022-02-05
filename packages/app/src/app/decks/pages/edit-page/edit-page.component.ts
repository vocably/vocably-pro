import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckStoreService } from '../../deck-store.service';
import { CardItem } from '@vocably/model';
import { Subject, takeUntil } from 'rxjs';
import { byDate } from '../../by-date';
import { AlertController } from '@ionic/angular';
import languages from '../../../language/languages';
import { getFullLanguageName } from '../../../language/getFullLanguageName';

@Component({
  selector: 'vocably-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public cards: CardItem[] = [];
  public fullLanguage: string = '';

  constructor(
    public deckStore: DeckStoreService,
    public alertController: AlertController
  ) {
    this.deckStore.deck$.pipe(takeUntil(this.destroy$)).subscribe((deck) => {
      this.fullLanguage = getFullLanguageName(deck.language ?? '');
      this.cards = deck.cards.sort(byDate);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  async onDelete() {
    const alert = await this.alertController.create({
      header: `Delete ${this.fullLanguage}`,
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleting deck...');
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
