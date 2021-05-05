import { AuthReducer, initialState } from "./auth-reducer";

const { createContext, useReducer, useContext, useState } = require("react");

//contains authentication token and user details
const AuthStateContext = createContext();
//here we will pass the dispatch method.
const AuthDispatchContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <>
      <AuthStateContext.Provider value={user}>
        <AuthDispatchContext.Provider value={dispatch}>
          {children}
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
    </>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined)
    throw new Error("useAuthState must be used within an AuthProvider");
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined)
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  return context;
};
