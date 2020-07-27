import { ADD_PRODUCT, UPDATE_PRODUCT } from "./cartTypes";

export const addProduct = (quantity, price, product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: { quantity: parseInt(quantity), price: parseInt(price), product },
  });
};

export const updateProduct = (quantity, totalPrice, id) => (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCT,
    payload: {
      quantity: parseInt(quantity),
      totalPrice: parseInt(totalPrice),
      id,
    },
  });
};
