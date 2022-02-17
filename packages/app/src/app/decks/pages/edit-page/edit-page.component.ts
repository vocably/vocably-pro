import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeckStoreService } from '../../deck-store.service';
import { CardItem } from '@vocably/model';
import { Subject, takeUntil } from 'rxjs';
import { byDate } from '../../by-date';
import { AlertController, LoadingController } from '@ionic/angular';
import { getFullLanguageName } from '../../../language/getFullLanguageName';
import { deleteLanguageDeck } from '@vocably/api';
import { DeckListStoreService } from '../../deck-list-store.service';
import { DeckService } from '../../deck.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  public cards: CardItem[] = [];
  public deleted: CardItem[] = [];
  public fullLanguage: string = '';

  constructor(
    public deckStore: DeckStoreService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public deckListStore: DeckListStoreService,
    public deckService: DeckService
  ) {
    this.deckStore.deck$.pipe(takeUntil(this.destroy$)).subscribe((deck) => {
      this.fullLanguage = getFullLanguageName(deck.language ?? '');
      this.cards = [...deck.cards, ...this.deleted].sort(byDate);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  deleteCard(card: CardItem) {
    this.deleted = [...this.deleted, card];
    this.deckService.delete(card.id).pipe(takeUntil(this.destroy$)).subscribe();
  }

  async restoreCard(card: CardItem) {
    this.deleted = this.deleted.filter(
      (deletedCard) => deletedCard.id !== card.id
    );

    this.deckService.restore(card).pipe(takeUntil(this.destroy$)).subscribe();
  }

  async deleteDeck() {
    const alert = await this.alertController.create({
      id: 'are-you-sure-delete',
      header: `Delete ${this.fullLanguage}`,
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          id: 'yes-please',
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Deleting the deck...',
            });
            loading.present().then();
            await deleteLanguageDeck(this.deckStore.deck$.value.language);
            this.deckListStore.reload$.next(null);
            loading.dismiss().then();
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
