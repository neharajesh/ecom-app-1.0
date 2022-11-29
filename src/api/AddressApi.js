import axios from "axios";
import ROOT_URL from "config";

export const getAllAddresses = async () => {
  try {
    const response = await axios.get(`${ROOT_URL}/address`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching all addresses", err.message);
  }
};

export const addNewAddress = async (address) => {
  try {
    const response = await axios.post(`${ROOT_URL}/address`, address, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error adding new address", err.message);
  }
};

export const getAddressById = async (addressId) => {
  try {
    const response = await axios.get(`${ROOT_URL}/address/${addressId}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching address by id", err.message);
  }
};

export const updateAddressById = async (addressId, address) => {
  try {
    const response = await axios.post(
      `${ROOT_URL}/address/${addressId}`,
      address,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error updating address by id", err.message);
  }
};

export const deleteAddressById = async (addressId) => {
  try {
    const response = await axios.delete(`${ROOT_URL}/address/${addressId}`);
    console.log(response.data);
  } catch (err) {
    console.log("Error deleting address", err.message);
  }
};

export const fetchUsersAddresses = async (userId) => {
  try {
    const response = await axios.get(`${ROOT_URL}/address/user/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching user's addresses", err.message);
  }
};
