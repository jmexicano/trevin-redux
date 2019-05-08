import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, JokeState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { FetchJoke, UpdateJoke } from 'src/app/actions/jokes/jokes.actions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  jokes$: Observable<JokeState>;
  clicks$: Observable<number>;
  constructor(private store: Store<State>, private httpClient: HttpClient) {
    this.jokes$ = store.select('jokes');
    this.clicks$ = store.select((state: State) => {
      return state.clicker.clicks;
    });
  }

  ngOnInit() {
  }

  newJoke() {
    this.store.dispatch(new FetchJoke());
    // this.store.dispatch(new FetchJoke());
    // this.httpClient.get<any>('https://api.icndb.com/jokes/random?limitTo=[nerdy]')
    //   .subscribe(data => {
    //     this.store.dispatch(new UpdateJoke(data.value.joke));
    //   });
  }

}
