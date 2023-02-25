import { addToCartApi, cartApi, getCartApi } from "./cartApi";
import * as types from "./cartTypes";

const cartLoading = () => {
  return {
    type: types.LOADING_API,
  };
};
const cartError = () => {
  return {
    type: types.ERROR_API,
  };
};

export const getCart = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_CART,
    payload: await getCartApi(id).then((res) => res),
  });
};

export const addToCart = (el, previousCart, uid,toast) => async (dispatch) => {
  let flag = false;
  previousCart.map((item) => {
    if (item.id === el.id) {
      flag = true;
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return el;
  });

  if (flag) {


    toast({
        title: "Item Already exist in Cart",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
  } else {
    addToCartApi(uid, [...previousCart, { ...el, quantity: 1 }]).then(() =>
      dispatch(getCart(uid))
    );
    toast({
        title: "Product Added to Cart",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
  }
};

export const cartQuantity = (q, previousCart, el, uid) => (dispatch) => {
  let flag = false;
  previousCart.map((item) => {
    if (item.id === el.id) {
      flag = true;
      return {
        ...item,
        quantity: item.quantity + q,
      };
    }
    return el;
  });

  if (flag) {
    addToCartApi(
      uid,
      previousCart.map((item) => {
        if (item.id === el.id) {
          return {
            ...item,
            quantity: item.quantity + q,
          };
        }
        return el;
      })
    ).then(() => dispatch(getCart(uid)));
  } else {
    addToCartApi(uid, [...previousCart, { ...el, quantity: 1 }]).then(() =>
      dispatch(getCart(uid))
    );
  }
};

export const removeCart = (id, previousCart, uid) => (dispatch) => {
  addToCartApi(
    uid,
    previousCart.filter((item) => item.id !== id)
  ).then(() => dispatch(getCart(uid)));
};

export { cartLoading };
