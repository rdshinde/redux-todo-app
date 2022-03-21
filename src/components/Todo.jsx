import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo, logoutUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";
export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  const userName = useSelector((state) => state.authReducer.name);
  return (
    <div className="wrapper shadow-sm">
      <header>
        <h1>Welcome {userName ? userName : "User"}!</h1>
        <div className="text-end">
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(logoutUser())}
          >
            Logout
          </button>
        </div>
        <h3>Your To Do List</h3>
      </header>
      <main className="text-start">
        <div>
          <label htmlFor="add-task">
            Add task: &nbsp;
            <input
              required
              type="text"
              id="add-task"
              placeholder="Add task here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <br />
          <br />
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => dispatch(addTodo(inputValue), setInputValue(""))}
            >
              ADD
            </button>
          </div>
        </div>
        <section className="text-center">
          <h2>TODO Items</h2>
          <div>
            <ul>
              {list.map(({ id, data }) => (
                <li key={id}>
                  <span className="text-4 bold-md">{data}</span>
                  <button
                    className="btn btn-success-outline"
                    onClick={() => dispatch(deleteTodo(id))}
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-end">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeTodo())}
            >
              Remove all tasks
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
