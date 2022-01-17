import { Component, OnInit } from '@angular/core';
import { listLanguages } from '@vocably/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public languages: string[] | null = null;
  public selectedLanguage: string | null = null;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const decksLoadResult = await listLanguages();

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
