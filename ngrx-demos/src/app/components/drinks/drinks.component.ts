import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Drink } from 'src/app/model/Drink';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateDrink } from 'src/app/actions/drinks/drinks.actions';
import { EditDrinkModalComponent } from '../edit-drink-modal/edit-drink-modal.component';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  faEdit = faEdit;
  drinks$: Observable<Drink[]>;
  drink$: Observable<Drink>;
  clicks$: Observable<number>;

  constructor(private store: Store<State>, private modalService: NgbModal) {
    this.drinks$ = store.select('drinks', 'drinks');
    this.drink$ = store.select('drinks', 'newDrink');
    this.clicks$ = store.select('clicker', 'clicks');
  }

  ngOnInit() {
  }

  edit(drink: Drink) {
    this.store.dispatch(new UpdateDrink(drink));
    this.modalService.open(EditDrinkModalComponent);
  }

}
