import { Component } from '@angular/core';
import { RouterParamsService } from './router-params.service';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clearScreen = false;
  constructor(routerParams: RouterParamsService, updateService: UpdateService) {
    routerParams.data$.subscribe((data) => {
      this.clearScreen = data['clearScreen'] ?? false;
    });

    updateService.bootstrap();
  }
}
