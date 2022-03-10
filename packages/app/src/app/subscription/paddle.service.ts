import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaddleEvent } from './paddle/event';

declare const Paddle: any;

@Injectable({
  providedIn: 'root',
})
export class PaddleService {
  event$ = new Subject<PaddleEvent>();

  constructor() {}

  public bootstrap() {
    if (environment.paddle.sandbox) {
      Paddle.Environment.set('sandbox');
    }

    Paddle.Setup({
      vendor: environment.paddle.vendorId,
      eventCallback: (event: PaddleEvent) => this.event$.next(event),
    });
  }
}
