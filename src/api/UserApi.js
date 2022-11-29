import axios from "axios";
import ROOT_URL from "config";
import { initialUser } from "context/user-context";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      `${ROOT_URL}/auth/signin`,
      { username: username, password: password },
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
    console.log("Error logging in", err.message);
  }
};

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${ROOT_URL}/auth/signup`, user, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Error registering", err.message);
  }
};

export const logoutUser = () => {
  localStorage.setItem("user", initialUser);
  localStorage.setItem("token", "");
};
