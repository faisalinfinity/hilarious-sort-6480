import { addOrderApi, getOrderApi } from "./orderApi";
import { GET_ORDER } from "./orderTypes";

export const getOrder = (uid) => async (dispatch) => {
  dispatch({
    type: GET_ORDER,
    payload: await getOrderApi(uid).then((data) => data),
  });
};

export const addOrder = (cart, order, uid, date) => (dispatch) => {
  addOrderApi(uid, [
    ...cart.map((el) => {
      return {
        ...el,
        date: date,
        status: "pending",
        orderId: uid + el.title[0] + el.category[0],
      };
    }),
    ...order,
  ]).then(dispatch(getOrder(uid)));
};
