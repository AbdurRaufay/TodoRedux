import { useState } from "react";
import "./TodoInput.css";
const TodoInput = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      return alert("please enter value");
    } else {
      createTodo(task);
      setTask("");
    }
  };

  return (
    <div className="input-div">
      <form onSubmit={handleSubmit}>
        <div className="add-main">
          <input
            className="form-control "
            type="text"
            name="task"
            placeholder="enter text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-success addtodo">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
