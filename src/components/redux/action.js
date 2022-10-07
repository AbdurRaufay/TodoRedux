import * as types from "./actionTypes";

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

export const removeTodo = (todo) => ({
  type: types.REMOVE_TODO,
  payload: todo,
});
export const updateTodo = (todo) => ({
  type: types.UPDATE_TODO,
  payload: todo,
});
export const searchTodo = (todo) => ({
  type: types.SEARCH_TODO,
  payload: todo,
});
