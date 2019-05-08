import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { JokesTypes, UpdateJoke } from 'src/app/actions/jokes/jokes.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class JokesEffects {

  @Effect()
  fetchJoke$ = this.actions$.pipe(
    ofType(JokesTypes.FetchJoke),
    switchMap(() => this.httpClient.get<any>('https://api.icndb.com/jokes/random?limitTo=[nerdy]')
      .pipe(
        map(data => new UpdateJoke(data.value.joke)),
        catchError(() => of(new UpdateJoke('An Error Has Occurred')))
      )
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
