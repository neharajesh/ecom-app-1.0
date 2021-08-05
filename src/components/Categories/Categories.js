import "../../styles.css";

export const Categories = () => {
  return (
    <>
      <div className="w-100 flex mg-r-2 flex-row-wrap">
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
