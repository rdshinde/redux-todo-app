import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions";
export const Login = () => {
  const [authInputs, setAuthInputs] = useState({ name: "", password: "" });
  const { name, password } = authInputs;
  const dispatch = useDispatch();

  return (
    <div className="wrapper text-center shadow-sm">
      <h1>Login</h1>
      <div className="text-start">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) =>
              setAuthInputs((prev) => ({ ...prev, name: e.target.value }))
            }
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) =>
              setAuthInputs((prev) => ({ ...prev, password: e.target.value }))
            }
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="text-center m-t-lg">
          <button className="btn btn-primary" onClick={() => dispatch(loginUser({ ...authInputs }))}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
