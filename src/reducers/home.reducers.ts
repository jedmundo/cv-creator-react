import { remove } from 'lodash';

import { TodoAction } from '../actions/home.actions';
import { HomeActionTypes } from '../constants/home.constants';
import { TodoItem } from '../models/todo-item';

export interface HomeState {
  todos: TodoItem[];
}

export const initialState: HomeState = {
  todos: []
};

export function reducer(state: HomeState = initialState, action: TodoAction) {
  switch (action.type) {
    case HomeActionTypes.CREATE_TODO:
      const todo = action.payload.todo;
      return {
        ...state,
        todos: [...state.todos, todo]
      };
    case HomeActionTypes.DELETE_TODO:
      const { id } = action.payload;
      remove(state.todos, (item) => item.id === id);
      return {
        ...state,
        todos: [...state.todos]
      };
    default:
      return state;
  }
};
