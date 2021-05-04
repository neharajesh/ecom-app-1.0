import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles.css";

export const Login = () => {
  const username = useRef(null);
  useEffect(() => {
    username.current.focus();
  });
  return (
    <>
      <div className="profile-page">
        <div className="card-w-30 card-h-30 flex-col flex-col-center pd-1">
          Login to view Profile
          <input
            className="w-75 pd-05 mg-05"
            type="text"
            placeholder="Username"
            ref={username}
          />
          <input
            className="w-75 pd-05 mg-05"
            type="password"
            placeholder="Password"
          />
          <button className="login-button w-75 bdr-rad-m bdr-none fill-primary-purple txt-white pd-05 mg-05">
            Login
          </button>
          <Link to="" className="txt-deco-none mg-05">
            Click here to SignUp.
          </Link>
        </div>
      </div>
    </>
  );
};
