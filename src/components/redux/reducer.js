import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [{ id: 1, task: "Mango" }],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // add to do
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
      };
      const addTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addTodos,
      };
    // delete to do
    case types.REMOVE_TODO:
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo,
      };
    // update to do
    case types.UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTask };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};
export default todoReducer;
