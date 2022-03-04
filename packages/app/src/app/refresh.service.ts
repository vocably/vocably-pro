import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  public refresh$ = new Subject();
  public isRefreshed$ = new Subject();

  private components: string[] = [];

  constructor() {}

  public register(component: string) {
    this.components.push(component);
  }

  public unregister(component: string) {
    this.components = this.components.filter((c) => c !== component);
    if (this.components.length === 0) {
      this.isRefreshed$.next(null);
    }
  }
}
