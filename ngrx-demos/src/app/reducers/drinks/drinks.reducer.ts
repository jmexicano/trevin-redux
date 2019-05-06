import { ClickerTypes } from 'src/app/actions/clicker/clicker.actions';
import { ClickerState, DrinksState } from '..';
import { Drink } from 'src/app/model/Drink';

const initialState: DrinksState = {
  drinks: [
    new Drink('coke', true, false, 0, 'vanilla', 380),
    new Drink('tea', false, true, 5, 'peach', 120),
    new Drink('vodka', false, false, 9, 'not great', 0),
    new Drink('more vodka', false, true, 0, 'whip cream', 25),
    new Drink('whiskey', false, false, 0, 'sour', 100)
  ],
  newDrink: new Drink()
};

export function drinksReducer(state = initialState, action) {

  return state;
}
