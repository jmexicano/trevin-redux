import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ClickerState } from 'src/app/reducers';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  clicks$: Observable<number>;

  constructor(private store: Store<{ clicker: ClickerState}>) {
    this.clicks$ = store.pipe(select('clicker', 'clicks'));
  }


  ngOnInit() {
  }

}
