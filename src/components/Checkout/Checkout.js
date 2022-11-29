import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "context/cart-context";
import { useAddress } from "context/address-context";
import { AddressCard } from "../Address/AddressCard";
import { showNotification } from "../Utilities/toast";

const initialDeliveryAddress = {
  _id: "",
  name: "",
  pincode: "",
  state: "",
  city: "",
  address: "",
  phno: "",
  user: "",
  landmark: "",
  addressType: "",
};

export const Checkout = () => {
  const { itemsInCart, cartPrice, setItemsInCart, setCartPrice, setCartCount } =
    useCart();
  const { addresses } = useAddress();
  const [checkoutAddress, setCheckoutAddress] = useState(
    initialDeliveryAddress
  );
  const navigate = useNavigate();

  const selectAddressHandler = (addressId) => {
    const address = addresses.find((address) => address._id === addressId);
    setCheckoutAddress(address);
  };

  const paymentHandler = () => {
    showNotification("Order Placed!");
    setTimeout(() => {
      setItemsInCart([]);
      setCartPrice(0);
      setCartCount(0);
      localStorage.setItem("cart", []);
      localStorage.setItem("cartCount", 0);
      localStorage.setItem("cartPrice", 0);
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <div className="flex-col flex-items-center">
        <div className="checkoutPage">
          <div className="w-45">
            <h2> Your Cart </h2>
            <div className="w-85">
              {itemsInCart.map((item) => (
                <div
                  className="pd-1 mg-1 flex flex-space-evenly w-100 bdr-thin bdr-grey bdr-rad-m"
                  key={item._id}
                >
                  <img className="img-s" src={item.image} alt={item.name} />
                  <p> {item.name} </p>
                  <b> Rs. {item.price} </b>
                </div>
              ))}
            </div>
            <div className="mg-1 pd-1 w-75 flex flex-items-center-y flex-space-between bdr-none bdr-rad-m fill-secondary-yellow">
              <h2> Total </h2>
              <b> Rs. {cartPrice} </b>
            </div>
          </div>
          <div className="w-55 mg-r-2">
            <div
              className={
                checkoutAddress._id === "" ? "display-none" : "display-block"
              }
            >
              <h2 className="mg-b-1"> Delivering to: </h2>
              <div className="addressCard" key={checkoutAddress._id}>
                <AddressCard address={checkoutAddress} />
                <div className="addressButtons">
                  <button
                    onClick={() => setCheckoutAddress(initialDeliveryAddress)}
                    className="fill-primary-purple"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                checkoutAddress._id !== "" ? "display-none" : "display-block"
              }
            >
              <h2 className="mg-b-1"> Choose Address </h2>
              <div className="flex">
                {addresses.map((address) => (
                  <div className="addressCard mg-025 h-auto" key={address._id}>
                    <AddressCard address={address} />
                    <div className="addressButtons">
                      <button
                        onClick={() => selectAddressHandler(address._id)}
                        className="fill-primary-purple"
                      >
                        Deliver Here
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mg-2">
          <h2> Pay here </h2>
          <small className="display-block">
            Unfortunately, online payments are down at the moment.
          </small>
          <br />
          <p> Pay Rs. {cartPrice} on Delivery! </p>
          {/* <div className="inputContainer">
            <p> Name on Card </p>
            <input className="inputBox" type="text" />
          </div>
          <div className="inputContainer">
            <p> Card Number </p>
            <input
              className="inputBox"
              type="text"
              maxLength={16}
              minLength={16}
            />
          </div> */}
          <button
            disabled={checkoutAddress._id === ""}
            className="mg-t-2 card-w-30 txt-l pd-tb-05 pd-lr-1 bdr-none bdr-rad-m fill-primary-yellow txt-deco-none txt-black"
            onClick={() => paymentHandler()}
          >
            Place Order
          </button>
        </div>
        <div id="notification-container"></div>
      </div>
    </>
  );
};
