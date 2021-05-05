import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../auth/auth-actions";
import { useAuthDispatch } from "../../auth/auth-context";
import "./login.css";

export const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");

  const dispatch = useAuthDispatch();

  const loginClickHandler = async () => {
    let payload = { username, password };
    try {
      let response = await loginUser(dispatch, payload);
      if (!response.user) return;
      console.log(localStorage.getItem("currentUser"));
      setMessage("Happy Shopping!");
    } catch (err) {
      console.log("Error occurred in the Login Component");
    }
  };

  return (
    <div className="details-card">
      <div className="card-w-30 card-h-30 flex-col flex-col-center pd-1">
        Login to view Profile
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
          onClick={loginClickHandler}
          className="submit-button w-75 bdr-rad-m bdr-none fill-primary-purple txt-white pd-05 mg-05"
        >
          Login
        </button>
        <p>{message}</p>
        <Link to="/auth/signup" className="txt-deco-none mg-05">
          Click here to Register.
        </Link>
      </div>
    </div>
  );
};
