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

    //on successful addition, i want to print a message on the screen.
  };

  return (
    <div className="details-card">
      <div className="card-w-30 card-h-30 flex-col flex-col-center pd-1">
        <p>Enter Your Details Below to Register</p>
        <input
          className="w-75 pd-05 mg-05"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-75 pd-05 mg-05"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-75 pd-05 mg-05"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={registerClickHandler}
          className="submit-button w-75 bdr-rad-m bdr-none fill-primary-purple txt-white pd-05 mg-05"
        >
          Register
        </button>
        <p className="txt-700 txt-pink">{message}</p>
      </div>
    </div>
  );
};
