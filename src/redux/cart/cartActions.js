import { ADD_CART_PRODUCT, UPDATE_CART_PRODUCT } from "./cartTypes";

export const addProduct = (quantity, price, product) => (dispatch) => {
  dispatch({
    type: ADD_CART_PRODUCT,
    payload: { quantity: parseInt(quantity), price: parseInt(price), product },
  });
};

export const updateCartProduct = (quantity, totalPrice, id) => (dispatch) => {
  dispatch({
    type: UPDATE_CART_PRODUCT,
    payload: {
      quantity: parseInt(quantity),
      totalPrice: parseInt(totalPrice),
      id,
    },
  });
};
