import "../layout.css";
import { RiHomeLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineDropbox } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useAuthDispatch, useAuthState } from "../../auth/auth-context";
import { logout } from "../../auth/auth-actions";

export const Sidebar = ({ sidebar }) => {
  const user = useAuthState();
  const dispatch = useAuthDispatch();

  return (
    <>
      <nav className={sidebar ? "sidebar open" : "sidebar"}>
        <NavLink to="/" end className="nav-link" activeClassName="nav-active">
          <RiHomeLine size={30} /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/products"
          className="nav-link"
          activeClassName="nav-active"
        >
          <AiOutlineDropbox size={30} /> <span>Products</span>
        </NavLink>
        <NavLink to="/cart" className="nav-link" activeClassName="nav-active">
          <FiShoppingCart size={30} /> <span>Cart</span>
        </NavLink>
        <NavLink
          to="/wishlist"
          className="nav-link"
          activeClassName="nav-active"
        >
          <FaRegHeart size={30} /> <span>Wishlist</span>
        </NavLink>

        <div className="sidebarOnly">
          {user?.token === "" ? (
            <NavLink
              to="/auth/signin"
              className="nav-link"
              activeClassName="nav-active"
            >
              <BiLogIn size={30} /> <span>Login</span>
            </NavLink>
          ) : (
            <NavLink
              onClick={() => logout(dispatch)}
              to="/"
              className="nav-link"
              activeClassName="nav-active"
            >
              <BiLogOut size={30} /> <span>Logout</span>
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};
