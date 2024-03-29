import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  Event as RouterEvent,
  NavigationEnd,
  Params,
  Router,
} from '@angular/router';
import { isEqual } from 'lodash-es';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

const collectParams = (root: ActivatedRouteSnapshot): [Params, Data] => {
  const params: Params = {};
  const data: Data = {};

  (function mergeParamsFromSnapshot(snapshot: ActivatedRouteSnapshot) {
    Object.assign(params, snapshot.params);
    Object.assign(data, snapshot.data);

    snapshot.children.forEach(mergeParamsFromSnapshot);
  })(root);

  return [params, data];
};

@Injectable({
  providedIn: 'root',
})
export class RouterParamsService {
  public paramsSnapshot: Params = {};
  public params$: Subject<Params> = new BehaviorSubject(this.paramsSnapshot);

  public dataSnapshot: Data = {};
  public data$: Subject<Data> = new BehaviorSubject(this.dataSnapshot);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: RouterEvent): event is NavigationEnd => {
          return event instanceof NavigationEnd;
        })
      )
      .subscribe((event) => {
        const snapshot = this.router.routerState.snapshot.root;
        const [nextParams, nextData] = collectParams(snapshot);
        if (!isEqual(this.paramsSnapshot, nextParams)) {
          this.params$.next((this.paramsSnapshot = nextParams));
        }

        if (!isEqual(this.dataSnapshot, nextData)) {
          this.data$.next((this.dataSnapshot = nextData));
        }
      });
  }
}
