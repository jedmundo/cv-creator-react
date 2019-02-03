import { createSelector } from 'reselect';
import { State } from '../reducers/index';

const getTodosState = ((state: State) => state.todos);
export const getTodosList = createSelector([getTodosState], s => s.todos);
