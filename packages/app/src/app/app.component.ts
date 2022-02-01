import { Component } from '@angular/core';
import { RouterParamsService } from './router-params.service';

@Component({
  selector: 'vocably-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clearScreen = false;
  constructor(routerParams: RouterParamsService) {
    routerParams.data$.subscribe((data) => {
      this.clearScreen = data['clearScreen'] ?? false;
    });
  }
}
