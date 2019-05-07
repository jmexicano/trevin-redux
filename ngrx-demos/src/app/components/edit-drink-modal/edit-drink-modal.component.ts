import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { DrinksState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { Drink } from 'src/app/model/Drink';

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

  ngOnInit() {
  }

}
