import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const initialUser = {
  _id: "",
  name: "",
  username: "",
  role: "",
};

let initialUserState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : initialUser;
let initialTokenState = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : "";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState);
  const [token, setToken] = useState(initialTokenState);
  return (
    <>
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
