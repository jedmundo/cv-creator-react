import { HomeActionTypes } from '../constants/home.constants';
import { TodoItem } from '../models/todo-item';

export interface CreateTodoAction {
  type: HomeActionTypes.CREATE_TODO;
  payload: { todo: TodoItem };
}

export interface DeleteTodoAction {
  type: HomeActionTypes.DELETE_TODO;
  payload: { id: number };
}

export type TodoAction = CreateTodoAction | DeleteTodoAction;

let todoId = 0;

export function createTodo(text: string): CreateTodoAction {
  return {
    type: HomeActionTypes.CREATE_TODO,
    payload: {
      todo: {
        id: todoId++,
        text
      }
    }
  }
}

export function deleteTodo(id: number): DeleteTodoAction {
  return { type: HomeActionTypes.DELETE_TODO, payload: { id } }
}
