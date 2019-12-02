import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { DrinksState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { Drink } from 'src/app/model/Drink';
import { UpdateDrink, SaveDrink } from 'src/app/actions/drinks/drinks.actions';

@Component({
  selector: 'app-edit-drink-modal',
  templateUrl: './edit-drink-modal.component.html',
  styleUrls: ['./edit-drink-modal.component.scss']
})
export class EditDrinkModalComponent implements OnInit {

  drink$: Observable<Drink>;

  constructor(private store: Store<{drinks: DrinksState}>, public activeModal: NgbActiveModal) {
    this.drink$ = store.select('drinks', 'newDrink');
  }

  updateDrink(event) {
    let value = event.target.value;
    if (event.target.type === 'number') {
      value = +value;
    }
    this.store.dispatch(new UpdateDrink({
      [event.target.name]: value
    }));
  }

  updateCaffenated(event) {
    const caffenated = event.target.value === 'yes';
    this.store.dispatch(new UpdateDrink({
      caffenated
    }));
  }

  submit() {
    this.store.dispatch(new SaveDrink());
    this.activeModal.close();
  }

  ngOnInit() {
  }

}
