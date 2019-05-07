import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ClickerState } from 'src/app/reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDrinkModalComponent } from '../edit-drink-modal/edit-drink-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  clicks$: Observable<number>;

  constructor(private store: Store<{ clicker: ClickerState}>, private modalService: NgbModal) {
    this.clicks$ = store.pipe(select('clicker', 'clicks'));
  }

  openDrinkModal() {
    const modalRef = this.modalService.open(EditDrinkModalComponent);
  }


  ngOnInit() {
  }

}
