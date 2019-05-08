import { Action } from '@ngrx/store';

export enum JokesTypes {
  UpdateJoke = '[Jokes] Update Joke',
  FetchJoke = '[Jokes] Fetch Joke'
}
export class UpdateJoke implements Action {
  readonly type = JokesTypes.UpdateJoke;

  constructor(public payload: string) {}
}

export class FetchJoke implements Action {
  readonly type = JokesTypes.FetchJoke;
}
