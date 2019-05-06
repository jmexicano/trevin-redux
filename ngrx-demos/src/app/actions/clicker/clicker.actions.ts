import { Action } from '@ngrx/store';

export enum ClickerTypes {
  UpdateClicks = '[Clicker] Update Clicks',
  ResetClicks = '[Clicker] Reset'
}
export class UpdateClicks implements Action {
  readonly type = ClickerTypes.UpdateClicks;

  constructor(public payload: number) {}
}

export class ResetClicks implements Action {
  readonly type = ClickerTypes.ResetClicks;
}
