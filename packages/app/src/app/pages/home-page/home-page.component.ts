import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { loadCards, loadDecks } from '@vocably/api';
import { AvailableLanguage } from '@vocably/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public languages: AvailableLanguage[] | null = null;
  public selectedLanguage: AvailableLanguage | null = null;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const decksLoadResult = await loadDecks();

    if (decksLoadResult.success === false) {
      // ToDo: Handle decks load error
      console.error(decksLoadResult);
      return;
    }

    this.languages = decksLoadResult.value;

    this.route.params.subscribe((params) => {
      if (this.languages?.includes(params['language'])) {
        this.selectedLanguage = params['language'];
      } else {
        this.selectedLanguage = this.languages ? this.languages[0] : null;
      }
    });
  }
}
