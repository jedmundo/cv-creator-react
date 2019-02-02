import { combineReducers } from 'redux';
import * as fromHome from './home.reducers';

export interface State {
  todos: fromHome.HomeState;
}

export const initialState: State = {
  todos: fromHome.initialState
}

export const reducer = combineReducers<State>({
  todos: fromHome.reducer
});
