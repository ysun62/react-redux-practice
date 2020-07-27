import { ADD_PRODUCT } from "./cartTypes";
import { containsProduct } from "../../utils";

const initialState = {
  products: [],
  totalQuantity: 0,
  subTotal: 0,
};

const updateProducts = (state, action) => {
  // If product not already in cart, add it to the cart
  if (!containsProduct(state.products, action.payload.product.id)) {
    const product = action.payload.product;
    product.quantity = action.payload.quantity;
    product.totalPrice = action.payload.price;
    return [...state.products, product];
  }

  // If product already in cart, update quantity and totalPrice
  else {
    const index = state.products.findIndex(
      (p) => p.id === action.payload.product.id
    );
    const product = state.products[index];
    product.quantity += action.payload.quantity;
    product.totalPrice += action.payload.price;
    state.products[index] = product;
    return [...state.products];
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: updateProducts(state, action),
        totalQuantity: state.totalQuantity + action.payload.quantity,
        subTotal: state.subTotal + action.payload.price,
      };

    default:
      return state;
  }
};
