import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import {reducer as cartReducer} from "./cart/cartReducer";
import { orderReducer } from "./order/orderReducer";
import { productReducer } from "./products/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product:productReducer,
  cart:cartReducer,
  order:orderReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
