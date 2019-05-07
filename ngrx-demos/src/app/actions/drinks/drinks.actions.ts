import { Action } from '@ngrx/store';
import { Drink } from 'src/app/model/Drink';

export enum DrinkTypes {
  UpdateDrink = '[Drinks] Update Drink',
  SaveDrink = '[Drinks] Save Drink'
}
export class UpdateDrink implements Action {
  readonly type = DrinkTypes.UpdateDrink;

  constructor(public payload: Partial<Drink>) {}
}

export class SaveDrink implements Action {
  readonly type = DrinkTypes.SaveDrink;
}
