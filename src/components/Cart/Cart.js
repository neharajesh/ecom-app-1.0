import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useProduct } from "../../context/product-context";
import { useUser } from "../../context/user-context";
import "../../styles.css";
import { AddToCart } from "./AddToCart";
import { RemoveFromCart } from "./RemoveFromCart";

export const Cart = () => {
  const { cartCount, cartPrice, itemsInCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  const { productList } = useProduct();
  const updatedItemsList = itemsInCart.filter((item) => item.quantity > 0);

  const checkoutHandler = () => {
    if (user._id === "") {
      navigate("/auth/signin");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="cart-page flex w-100 h-100">
      <div className="flex-col w-100">
        {updatedItemsList
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div
              className="w-100 h-auto mg-1 flex bs pd-2 flex-items-center"
              key={item._id}
            >
              <div className="flex">
                <img className="img-m" src={item.image} alt={item.name} />
                <div className="cont-fluid card-w-20 mg-l-2">
                  <p className="txt-l txt-700"> {item.name} </p>
                  <p>Brand : {item.brand}</p>
                  <p>Material : {item.material}</p>
                  <p>Offer : {item.offer}</p>
                </div>
              </div>

              <div className="card-w-20 flex-col">
                <p className="txt-l txt-500 flex-self-center mg-b-2">
                  {" "}
                  Rs. {item.price}{" "}
                </p>
                <div className="flex flex-space-evenly">
                  <AddToCart
                    className="mg-r-2"
                    buttonVal={"Add One"}
                    existingProductList={productList}
                    productId={item._id}
                  />
                  <p className="mg-l-1 mg-r-1 mg-t-1">{item.quantity}</p>
                  <RemoveFromCart
                    className="button-cart"
                    buttonVal={"Remove One"}
                    existingProductList={productList}
                    productId={item._id}
                  />
                </div>
              </div>
            </div>
          ))}
        {itemsInCart.length === 0 && (
          <p className="flex-self-center mg-t-2 txt-xl">
            Shop To Add Stuff To Cart!
          </p>
        )}
      </div>

      <div className="cont-fluid w-25 mg-t-2 pd-2">
        <p className="mg-tb-1 txt-l">
          Total Items In Cart : <span className="txt-700">{cartCount}</span>
        </p>
        <p className="mg-tb-1 txt-l">
          Total Cart Price : <span className="txt-700">Rs. {cartPrice}</span>
        </p>
        <button
          onClick={() => checkoutHandler()}
          className="btn fill-primary-yellow pd-05 mg-05 h-fit w-fit bdr-rad-m bdr-thick flex-self-center txt-deco-none txt-black"
        >
          Checkout
        </button>
        <div id="notification-container"></div>
      </div>
    </div>
  );
};
