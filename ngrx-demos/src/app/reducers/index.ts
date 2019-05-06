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

export interface ClickerState {
  clicks: number;
}

export interface DrinksState {
  drinks: Drink[];
  newDrink: Drink;
}

export interface State {
  clicker: ClickerState;
  drinks: DrinksState;
}

export const reducers: ActionReducerMap<State> = {
  clicker: clickerReducer,
  drinks: drinksReducer
};


export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
