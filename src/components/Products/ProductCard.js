import { BsLightningFill } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
import { AddToCart } from "../Cart/AddToCart";
import { AddToWishlist } from "../Wishlist/AddToWishlist";
import { Link } from "react-router-dom";

export const ProductCard = ({ productList, product }) => {
  const addRatingStars = (rating) => {
    let starString = [];
    for (let i = 0; i < rating; i++) {
      starString.push(
        <GiRoundStar size={20} className="mg-r-025 txt-yellow" />
      );
    }
    return starString;
  };
  return (
    <>
      <div
        key={product._id}
        className="product-item card bdr-thin bdr-none bdr-rad-m mg-05 flex"
      >
        <img
          className="img-m mg-05 flex-self-center"
          src={product.image}
          alt={product.name}
        />
        <div className="w-100 mg-1 flex-col-center-items-y">
          <p className="txt-700 txt-l"> {product.name} </p>
          <p className="txt-500 txt-s txt-grey">
            {product.brand.toUpperCase()}
          </p>
          <p className="txt-l txt-700 txt-blue mg-tb-025 price-blue">
            Rs. {product.price}
          </p>
          <span className=" mg-tb-05">{addRatingStars(product.rating)}</span>
          {product.fastDelivery && (
            <span className="badge-tl txt-500 pd-05 txt-s bdr-rad-round">
              <BsLightningFill size={20} className="txt-yellow" />
            </span>
          )}
          <div id="cont-fluid w-100">
            {product.inStock ? (
              <AddToCart
                buttonVal={"Add to Cart"}
                existingProductList={productList}
                productId={product._id}
              />
            ) : (
              <button className="btn-disabled product-button pd-05 mg-05 bdr-none bdr-rad-m btn txt-black">
                Out of Stock
              </button>
            )}

            <AddToWishlist
              existingProductList={productList}
              productId={product._id}
            />
          </div>
          <br />
          <Link
            className="view-details txt-grey txt-m txt-deco-none"
            to={`/products/${product._id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};
