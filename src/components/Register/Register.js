import axios from "axios";
import { useState } from "react";
import "../Login/login.css";

export const Register = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const registerClickHandler = async () => {
    console.log(name, username, password);
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        {
          name: name,
          username: username,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log("message =>", response.data.message);
      setMessage(response.data.message);
    } catch (err) {
      console.log("error occurred while registering user", err.message);
    }
  };

  return (
    <div className="details-card">
      <div className="card-w-40 card-h-30 flex-col flex-col-center pd-1">
        <p>Enter Your Details Below to Register</p>
        <div>
          Name :{" "}
          <input
            className="w-75 pd-05 mg-05 mg-l-2"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          onClick={registerClickHandler}
          className="submit-button w-50 bdr-rad-m bdr-none fill-primary-purple txt-white pd-05 mg-05"
        >
          Register
        </button>
        <p className="onscreen-text txt-700 txt-pink">{message}</p>
      </div>
    </div>
  );
};
