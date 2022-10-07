import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
const App = () => {
  const state = useSelector((state) => ({
    ...state,
  }));
  // const state = useSelector((state) => state.todos);

  return (
    <div className="wrap mt-5">
      <div className="container mt-5">
        <h3 className="head">To Do App Redux</h3>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
