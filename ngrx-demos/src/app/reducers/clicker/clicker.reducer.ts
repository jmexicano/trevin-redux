import { ClickerTypes } from 'src/app/actions/clicker/clicker.actions';
import { ClickerState } from '..';
import { JokesTypes } from 'src/app/actions/jokes/jokes.actions';

const initialState: ClickerState = {
  clicks: 27
};

export function clickerReducer(state = initialState, action) {
  switch (action.type) {
    case ClickerTypes.UpdateClicks:
      return {
        ...state,
        clicks: state.clicks + action.payload
      };
    case ClickerTypes.ResetClicks:
      return initialState;
    case JokesTypes.FetchJoke:
      return {
        ...state,
        clicks: state.clicks - 20
      };
    default:
      return state;
  }
  return state;
}
