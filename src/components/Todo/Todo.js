import React, { useState } from "react";
import "./Todo.css";
const Todo = ({ task, id, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEditing(false);
  };

  return (
    <div className="mt-3">
      <div className="list-input">
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <input
              className="form-control "
              type="text"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <button className="btn btn-success save-btn">save</button>
          </form>
        ) : (
          <div className="list-div">
            <li>
              <span className="task">{task}</span>
              <div className="edit-remove-div">
                <button
                  className="btn btn-danger add-remove"
                  onClick={removeTodo}
                >
                  Remove
                </button>
                <button
                  className="btn btn-success add-remove"
                  type="button"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;

//  <div>
//    <button
//      className="btn btn-primary edit"
//      data-bs-toggle="modal"
//      data-bs-target="#exampleModal"
//      type="button"
//      onClick={() => setEditTask(task.id)}
//    >
//      Edit
//    </button>

//    <div
//      class="modal fade"
//      id="exampleModal"
//      tabindex="-1"
//      aria-labelledby="exampleModalLabel"
//      aria-hidden="true"
//    >
//      <div class="modal-dialog">
//        <div class="modal-content">
//          <div class="modal-header">
//            <form onSubmit={handleUpdate}>
//              <input
//                class="form-control edit-inp"
//                type="text"
//                style={{
//                  width: 300,
//                  marginLeft: 70,
//                  display: "flex",
//                  justifyContent: "center",
//                  alignItems: "center",
//                }}
//                value={editTask}
//                name="task"
//                onChange={(e) => {
//                  setEditTask(e.target.value);
//                }}
//              />
//              <div class="d-grid gap-2 col-6 mx-auto mt-5">
//                <button
//                  class="btn btn-primary"
//                  type="submit"
//                  data-bs-dismiss="modal"
//                  style={{ marginLeft: 0, width: 150 }}
//                >
//                  Save
//                </button>
//              </div>
//            </form>
//            <button
//              type="button"
//              class="btn btn-secondary"
//              style={{
//                display: "flex",
//                justifyContent: "center",
//                alignItems: "center",
//                marginTop: 90,
//              }}
//              data-bs-dismiss="modal"
//              onClick={() => setEditTask("")}
//            >
//              Close
//            </button>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>;
