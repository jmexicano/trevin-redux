import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { clickerReducer } from './clicker/clicker.reducer';

export interface ClickerState {
  clicks: number;
}

export interface State {
  clicker: ClickerState;
}

export const reducers: ActionReducerMap<State> = {
  clicker: clickerReducer
};


export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
