let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).username
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";

export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userDetails: action.payload.username,
        token: action.payload.auth_token,
        loading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errMessage: action.error,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
      };
    default:
      throw new Error("Error occurred while authenticating login.");
  }
};
