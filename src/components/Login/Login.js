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
      console.log(response.data.success);
      if (response.data.success) {
        setMessage("Could not Login, try again");
      } else setMessage("Happy Shopping!");
    } catch (err) {
      console.log("Error occurred in the Login Component");
    }
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

        <Link to="/auth/signup" className="onscreen-text txt-deco-none mg-05">
          Click here to Register.
        </Link>

        <p className="onscreen-text">{message}</p>
      </div>
    </div>
  );
};
