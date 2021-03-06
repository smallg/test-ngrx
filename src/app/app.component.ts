import { Component } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, Reset, addCount } from './store/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

}
