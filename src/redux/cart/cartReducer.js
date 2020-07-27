import { ADD_PRODUCT } from "./cartTypes";
import { containsProduct } from "../../utils";

const initialState = {
  products: [],
  totalQuantity: 0,
  subTotal: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: !containsProduct(state.products, action.payload.product.id)
          ? [...state.products, action.payload.product]
          : state.products,
        totalQuantity: state.totalQuantity + parseInt(action.payload.quantity),
        subTotal: state.subTotal + parseInt(action.payload.price),
      };

    default:
      return state;
  }
};
