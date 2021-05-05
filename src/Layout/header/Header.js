import "../layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../../auth/auth-context";
import { logout } from "../../auth/auth-actions";

export const Header = ({ handleToggleSidebar }) => {
  const user = useAuthState();
  console.log(user);
  const dispatch = useAuthDispatch();
  return (
    <>
      <div className="header flex flex-space-between flex-items-center">
        <GiHamburgerMenu
          className="header-menu"
          size={35}
          onClick={() => handleToggleSidebar()}
        />

        <Link to="/" className="header-brand txt-700">
          PETMART
        </Link>
        {/* <div className="header-brand txt-700">PET MART</div> */}

        <div className="header-links flex">
          <NavLink to="/cart" className="nav-link" activeClassName="nav-active">
            Cart
          </NavLink>
          <NavLink
            to="/wishlist"
            className="nav-link"
            activeClassName="nav-active"
          >
            Wishlist
          </NavLink>
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
