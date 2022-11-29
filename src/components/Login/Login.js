import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "api/UserApi";
import { useUser } from "context/user-context";
import "./login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setUser, setToken } = useUser();
  const navigate = useNavigate();

  const loginClickHandler = async () => {
    const response = await loginUser(username, password);
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", JSON.stringify(response.authToken));
    setUser(response.user);
    setToken(response.authToken);
    setMessage("Happy Shopping!");
    navigate("/");
  };

  const loginAsGuestHandler = async () => {
    const response = await loginUser("username", "password");
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", JSON.stringify(response.authToken));
    setUser(response.user);
    setToken(response.authToken);
    setMessage("Happy Shopping!");
    navigate("/");
  };

  return (
    <div className="details-card">
      <div className="card-w-40 card-h-30 flex-col flex-col-center pd-1">
        <div>
          Username :
          <input
            className="w-75 pd-05 mg-05"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Password :{" "}
          <input
            className="w-75 pd-05 mg-05"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={loginClickHandler}
          className="submit-button w-50 bdr-rad-m bdr-none fill-primary-purple txt-white pd-05 mg-05"
        >
          Login
        </button>
        <button
          onClick={loginAsGuestHandler}
          className="submit-button w-50 bdr-rad-m bdr-none fill-primary-purple txt-white pd-05 mg-05"
        >
          Login as Guest
        </button>

        <Link to="/auth/signup" className="onscreen-text txt-deco-none mg-05">
          Click here to Register.
        </Link>

        <p className="onscreen-text">{message}</p>
      </div>
    </div>
  );
};
