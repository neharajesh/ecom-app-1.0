import { Link } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import "../../styles.css";

export const Home = () => {
  console.log("home page!");
  return (
    <>
      <div className="cont-fluid">
        <p className="txt-xl txt-700">Welcome to Pet Smart!</p>
        <p className="mg-tb-1">All your pet needs, in one place!</p>
        <Categories />
        <p className="mg-tb-1">
          Exciting offers on all prodcuts! Check them out now!
        </p>
        <Link
          to="/products"
          className="card-w-20 bdr-thin bdr-none bs fill-primary-purple txt-white txt-deco-none pd-05 bdr-rad-m"
        >
          Shop now!
        </Link>
      </div>
    </>
  );
};
