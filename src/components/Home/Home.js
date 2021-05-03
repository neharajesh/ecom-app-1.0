import { Categories } from "../Categories/Categories";

export const Home = () => {
  console.log("home page!");
  return (
    <>
      <div className="cont-fluid">
        <p className="txt-xl txt-700">Welcome to Pet Smart!</p>
        <p className="mg-tb-1">
          Here you can find clothes, toys, accessories and more for your pets!
        </p>
        <p className="mg-tb-1">Check offers out below!</p>
        <p className="txt-700">Categories :</p>
        <Categories />
      </div>
    </>
  );
};
