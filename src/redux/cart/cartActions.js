import { ADD_PRODUCT } from "./cartTypes";

export const addProduct = (quantity, price, product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: { quantity: parseInt(quantity), price: parseInt(price), product },
  });
};
