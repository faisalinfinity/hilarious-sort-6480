import { LOGIN, LOGOUT, SIGNUP } from "./authTypes";

const initialstate = JSON.parse(localStorage.getItem("cache")) || {
  isLoggedIn: false,
  user: [],
  isSignUp: false,
};

export const authReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: [],
      };
    }
    case SIGNUP: {
      return {
        ...state,
        isSignUp: true,
      };
    }

    default: {
      return state;
    }
  }
};
