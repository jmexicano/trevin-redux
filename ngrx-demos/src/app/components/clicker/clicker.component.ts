import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateClicks } from 'src/app/actions/clicker/clicker.actions';
import { ClickerState } from 'src/app/reducers';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {

  clicks$: Observable<number>;

  constructor(private store: Store<{ clicker: ClickerState}>) {
    this.clicks$ = store.pipe(select('clicker', 'clicks'));
  }

  ngOnInit() {
  }

  increment(amount: number) {
    this.store.dispatch(new UpdateClicks(amount));
  }

}
