import { Link } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import "./home.css";

export const Home = () => {
  console.log("home page!");
  return (
    <>
      <div className="cont-fluid w-100 h-100">
        <div className="cont-image">
          <p className="txt-xl mg-tb-1">ALL YOUR PET NEEDS, IN ONE PLACE!</p>
          <p className="txt-l mg-tb-1">
            Exciting offers on all prodcuts! Check them out now!
          </p>
          <br />
          <Link
            to="/products"
            className="card-w-40 bdr-thin bdr-none fill-primary-purple txt-white txt-deco-none pd-05 bdr-rad-m"
          >
            Shop now!
          </Link>
        </div>
        {/* <Categories /> */}
      </div>
    </>
  );
};
