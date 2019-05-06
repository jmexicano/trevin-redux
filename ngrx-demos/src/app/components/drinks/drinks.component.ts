import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Drink } from 'src/app/model/Drink';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinks$: Observable<Drink[]>;
  drink$: Observable<Drink>;
  clicks$: Observable<number>;

  constructor(private state: Store<State>) {
    this.drinks$ = state.select('drinks', 'drinks');
    this.drink$ = state.select('drinks', 'newDrink');
    this.clicks$ = state.select('clicker', 'clicks');
  }

  ngOnInit() {
  }

}
