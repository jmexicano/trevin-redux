import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { clickerReducer } from './clicker/clicker.reducer';
import { Drink } from '../model/Drink';
import { drinksReducer } from './drinks/drinks.reducer';
import { jokesReducer } from './jokes/jokes.reducer';

export interface ClickerState {
  clicks: number;
}

export interface DrinksState {
  drinks: Drink[];
  newDrink: Drink;
}

export interface JokeState {
  joke: string;
  loading: boolean;
}

export interface State {
  clicker: ClickerState;
  drinks: DrinksState;
  jokes: JokeState;
}

export const reducers: ActionReducerMap<State> = {
  clicker: clickerReducer,
  drinks: drinksReducer,
  jokes: jokesReducer
};


export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
