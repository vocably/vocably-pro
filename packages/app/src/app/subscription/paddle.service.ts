import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare const Paddle: any;

@Injectable({
  providedIn: 'root',
})
export class PaddleService {
  constructor() {}

  public bootstrap() {
    if (environment.paddle.sandbox) {
      Paddle.Environment.set('sandbox');
    }

    Paddle.Setup({
      vendor: environment.paddle.vendorId,
    });
  }
}
