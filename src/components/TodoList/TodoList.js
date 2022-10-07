import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, addTodo, updateTodo, searchTodo } from "../redux/action";
import TodoInput from "../TodoInput/TodoInput";
import Todo from "../Todo/Todo";
import "./TodoList.css";
const TodoList = () => {
  // const [newTodo, setNewtod] = useState("");

  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const create = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  const update = (id, updatedTask) => {
    dispatch(updateTodo({ id, updatedTask }));
  };
  return (
    <div>
      <TodoInput createTodo={create} />
      <ul className="underliner">
        {state.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              removeTodo={() => dispatch(removeTodo(todo))}
              updateTodo={update}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
