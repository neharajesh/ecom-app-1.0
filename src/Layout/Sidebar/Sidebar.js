import "../layout.css";
import { RiHomeLine } from "react-icons/ri";
import { IoMdList } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineDropbox } from "react-icons/ai";

export const Sidebar = ({ sidebar }) => {
  return (
    <>
      <nav className={sidebar ? "sidebar open" : "sidebar"}>
        <NavLink
          exact
          to="/"
          end
          className="nav-link"
          activeClassName="nav-active"
        >
          <RiHomeLine size={30} /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/products"
          className="nav-link"
          activeClassName="nav-active"
        >
          <AiOutlineDropbox size={30} /> <span>Products</span>
        </NavLink>
        {/* add navlink for the rest of these */}
        <li className="nav-link">
          <IoMdList size={30} /> <span>Categories</span>
        </li>
        <div className="sidebarOnly">
          <NavLink
            to="/login"
            className="nav-link"
            activeClassName="nav-active"
          >
            <FaRegHeart size={30} /> <span>Login</span>
          </NavLink>
          <NavLink
            to="/profile"
            className="nav-link"
            activeClassName="nav-active"
          >
            <VscAccount size={30} /> <span>Profile</span>
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
        </div>
      </nav>
    </>
  );
};
