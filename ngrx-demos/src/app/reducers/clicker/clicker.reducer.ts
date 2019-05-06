import { ClickerTypes } from 'src/app/actions/clicker/clicker.actions';
import { ClickerState } from '..';

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
    default:
      return state;
  }
  return state;
}
