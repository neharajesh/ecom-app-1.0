import { Link } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="cont-home cont-fluid w-100 h-100">
        <div className="cont-image mg-t-2">
          <p className="txt-xl mg-tb-1">ALL YOUR PET NEEDS, IN ONE PLACE!</p>
          <p className="txt-l mg-tb-1">
            Exciting offers on all products! Check them out now!
          </p>
          <br />
          <Link
            to="/products"
            className="card-w-30 bdr-thin bdr-none fill-primary-purple txt-white txt-deco-none pd-05 bdr-rad-m"
          >
            Shop now!
          </Link>
        </div>
      </div>
    </>
  );
};
