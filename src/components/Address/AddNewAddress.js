import React, { useState } from "react";
import { addNewAddress } from "../../api/AddressApi";
import { useUser } from "../../context/user-context";

export const AddNewAddress = () => {
  const { user } = useUser();
  const [name, setName] = useState(""); //full name
  const [phno, setPhno] = useState(""); //phone number
  const [pincode, setPincode] = useState(""); //pincode
  const [address, setAddress] = useState(""); //address
  const [landmark, setLandmark] = useState(""); //landmark
  const [city, setCity] = useState(""); //city
  const [state, setState] = useState(""); //state
  const [addressType, setAddressType] = useState(""); //home or office

  const addNewAddressHandler = async () => {
    const newAddress = {
      name: name,
      phno: phno,
      pincode: pincode,
      address: address,
      landmark: landmark,
      city: city,
      state: state,
      addressType: addressType,
      user: user._id,
    };
    console.log(newAddress);
    const response = await addNewAddress(newAddress);
    console.log(response);
  };

  return (
    <>
      <div className="pd-1 mg-1 w-75 flex-col flex-col-items-center">
        <br />
        <div className="inputContainer">
          <p> Full Name </p>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <p> Phone Number </p>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => setPhno(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <p> Pincode </p>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => setPincode(e.target.value)}
            placeholder="6 Digit Number"
          />
        </div>
        <div className="inputContainer">
          <p> Address </p>
          <input
            className="inputBox"
            type="textbox"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <p> Landmark </p>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => setLandmark(e.target.value)}
            placeholder="Eg.: Near Pizza Hut"
          />
        </div>
        <div className="inputContainer">
          <p> City </p>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {/* change stuff below to dropdowns */}
        <div className="inputContainer">
          <p> State </p>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <p> Address Type </p>
          <input
            className="inputBox"
            type="text"
            onChange={(e) => setAddressType(e.target.value)}
          />
        </div>
        <button
          className="pd-lr-1 pd-tb-05 fill-primary-purple txt-white bdr-none bdr-rad-m"
          onClick={() => addNewAddressHandler()}
        >
          {" "}
          Add Address{" "}
        </button>
      </div>
    </>
  );
};
