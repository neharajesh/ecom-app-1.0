import { useCategory } from "../../context/categories-context";
import "../../styles.css";

export const Categories = () => {
  const { categoryList } = useCategory();

  return (
    <>
      <div className="w-100 flex mg-r-2 flex-row-wrap">
        {/* TO FIX LATER 
        {categoryList.map((category) => (
          <div
            className="card-w-20 bdr-thin bdr-rad-m bdr-secondary-grey mg-1 pd-1"
            key={category._id}
          >
            <p className="txt-700 txt-xl">{category.name}</p>
            <p className="txt-s mg-tb-05">{category.description}</p>
          </div>
        ))} */}
        <div className="card-w-20 bdr-thin bdr-rad-m bdr-secondary-grey mg-1 pd-1">
          <p className="txt-700 txt-xl">Accessories</p>
          <p className="txt-s mg-tb-05">
            Super cute accessories for your super cute pets!
          </p>
        </div>
        <div className="card-w-20 bdr-thin bdr-rad-m bdr-secondary-grey mg-1 pd-1">
          <p className="txt-700 txt-xl">Clothes</p>
          <p className="txt-s mg-tb-05">
            Super cute clothes for your super cute pets!
          </p>
        </div>
      </div>
    </>
  );
};
