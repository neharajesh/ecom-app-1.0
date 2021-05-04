import "../layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

export const Header = ({ handleToggleSidebar }) => {
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
          <NavLink
            to="/profile"
            className="nav-link"
            activeClassName="nav-active"
          >
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};
