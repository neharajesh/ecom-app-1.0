import React from "react";
import { useWishlist } from "context/wishlist-context";
import "../../styles.css";
import { RemoveFromWishlist } from "./RemoveFromWishlist";

export const Wishlist = () => {
  const { itemsInWishlist } = useWishlist();

  return (
    <>
      <div className="flex flex-row-wrap mg-1">
        {itemsInWishlist.map((item) => (
          <div
            className="cont-fluid mg-1 pd-1 bdr-rad-m card-w-20 bs"
            key={item._id}
          >
            <img className="img-xl" src={item.image} alt={item.name} />
            <div className="flex-col">
              <p className="txt-l txt-700 mg-1">{item.name}</p>
              <p className="txt-l txt-500 mg-1"> Rs. {item.price}</p>
              <RemoveFromWishlist itemId={item._id} />
            </div>
          </div>
        ))}
        {itemsInWishlist.length === 0 && (
          <p className="flex-self-center mg-t-2 txt-xl">Wishlist is Empty!</p>
        )}
        <div id="notification-container"></div>
      </div>
    </>
  );
};
