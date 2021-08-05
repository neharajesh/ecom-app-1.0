import "../layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../../context/user-context";
import { logoutUser } from "../../api/UserApi";

export const Header = ({ handleToggleSidebar }) => {
  const { user, token } = useUser();

  return (
    <>
      <div className="header flex flex-space-between flex-items-center">
        <div>{/* To keep the header in the center */}</div>
        <GiHamburgerMenu
          className="header-menu"
          size={35}
          onClick={() => handleToggleSidebar()}
        />

        <Link to="/" className="header-brand txt-700">
          PETMART
        </Link>

        <div className="header-links flex">
          {token === "" ? "" : <p className="mg-t-05">Hi, {user.name} !</p>}
          {token === "" ? (
            <NavLink
              to="/auth/signin"
              className="nav-link"
              activeClassName="nav-active"
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              onClick={() => logoutUser()}
              to="/"
              className="nav-link"
              activeClassName="nav-active"
            >
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};
