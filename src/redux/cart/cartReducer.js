import { ADD_CART_PRODUCT, UPDATE_CART_PRODUCT } from "./cartTypes";

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  subTotal: 0,
};

const updateCartProducts = (state, action) => {
  const productId = action.payload.product.id;
  const productNotInCart =
    state.cartProducts.findIndex((p) => p.id === productId) === -1;

  // If product not already in cart, add it to the cart
  if (productNotInCart) {
    const product = action.payload.product;
    product.quantity = action.payload.quantity;
    product.totalPrice = action.payload.price;
    return [...state.cartProducts, product];
  }

  // If product already in cart, update quantity and totalPrice
  else {
    return state.cartProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + action.payload.quantity,
          totalPrice: product.totalPrice + action.payload.price,
        };
      }

      return product;
    });
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_PRODUCT:
      return {
        cartProducts: updateCartProducts(state, action),
        totalQuantity: state.totalQuantity + action.payload.quantity,
        subTotal: state.subTotal + action.payload.price,
      };

    case UPDATE_CART_PRODUCT:
      const product = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      const prevQuantity = product.quantity;
      const prevTotalPrice = product.totalPrice;

      return {
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.quantity,
              totalPrice: action.payload.totalPrice,
            };
          }

          return product;
        }),
        totalQuantity:
          state.totalQuantity - prevQuantity + action.payload.quantity,
        subTotal: state.subTotal - prevTotalPrice + action.payload.totalPrice,
      };

    default:
      return state;
  }
};
