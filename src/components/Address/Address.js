import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteAddressById, fetchUsersAddresses } from "../../api/AddressApi";
import { useAddress } from "../../context/address-context";
import { useUser } from "../../context/user-context";
import { AddressCard } from "./AddressCard";

export const Address = () => {
  const { addresses, setAddresses } = useAddress();
  const { user } = useUser();
  const navigate = useNavigate();

  const deleteAddressHandler = async (addressId) => {
    await deleteAddressById(addressId);
  };

  useEffect(async () => {
    if (user._id === "") {
      navigate("/auth/signin");
    } else {
      const response = await fetchUsersAddresses(user._id);
      console.log(response.data);
      localStorage.setItem("address", JSON.stringify(response.data));
      setAddresses(response.data);
    }
  });
  return (
    <>
      <div>
        <p className="mg-1 txt-l"> Your addresses : </p>
        <Link className="newAddressBox fill-primary-purple" to="/address/new">
          <span> Add new address </span>
        </Link>
        <div className="addressContainer mg-t-2">
          {addresses.map((address) => (
            <div className="addressCard" key={address._id}>
              <AddressCard address={address} />
              <div className="addressButtons">
                <button
                  onClick={() => deleteAddressHandler(address._id)}
                  className="fill-primary-red"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
