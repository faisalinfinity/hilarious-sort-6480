import * as types from "./cartTypes";

let initialState = {
  isLoading: false,
  isError: false,
  cart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOADING_API:
      return {
        ...state,
        isLoading: true,
      };
    case types.ERROR_API:
      return {
        ...state,
        isError: true,
      };

    case types.GET_CART: {
      return {
        ...state,
        cart: payload.cart,
      };
    }
    case types.ADD_TO_CART: {
      return {
        ...state,
        cart: payload,
      };
    }
    default:
      return state;
  }
};
export { reducer };
