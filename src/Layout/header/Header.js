import "../layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../../auth/auth-context";
import { logout } from "../../auth/auth-actions";
import { useTheme } from "../../context/theme-context";

export const Header = ({ handleToggleSidebar }) => {
  const user = useAuthState();
  const dispatch = useAuthDispatch();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === "dark" ? setTheme("") : setTheme("dark");
  };
  return (
    <>
      <div className="header flex flex-space-between flex-items-center">
        <div>{/* To keep the header in the center */}</div>
        <GiHamburgerMenu
          className="header-menu"
          size={35}
          onClick={() => handleToggleSidebar()}
        />

        <button className="themeToggleButton" onClick={() => toggleTheme()}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        <Link to="/" className="header-brand txt-700">
          PETMART
        </Link>

        <div className="header-links flex">
          {user?.token === "" ? (
            ""
          ) : (
            <p className="mg-t-05">Hi, {user.userDetails} !</p>
          )}
          {user?.token === "" ? (
            <NavLink
              to="/auth/signin"
              className="nav-link"
              activeClassName="nav-active"
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              onClick={() => logout(dispatch)}
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
