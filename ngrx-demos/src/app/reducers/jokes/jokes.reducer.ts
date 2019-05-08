import { JokeState } from '..';
import { JokesTypes } from 'src/app/actions/jokes/jokes.actions';

const initialState: JokeState = {
  joke: `Chuck Norris doesn't wear a watch, he decides what time it is.`,
  loading: false
};

export function jokesReducer(state = initialState, action): JokeState {
  switch (action.type) {
    case JokesTypes.UpdateJoke:
      return {
        ...state,
        joke: action.payload,
        loading: false
      };
    case JokesTypes.FetchJoke:
      return {
        ...state,
        loading: true
      };
    default:
      break;
  }
  return state;
}
