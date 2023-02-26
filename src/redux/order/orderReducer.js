import { GET_ORDER, ORDER_PLACED } from "./orderTypes";

const initialState = {
  order: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER_PLACED: {
      return {
        ...state,
        order: payload,
      };
    }

    case GET_ORDER: {
      return {
        ...state,
        order: payload.order,
      };
    }

    default: {
      return state;
    }
  }
};
