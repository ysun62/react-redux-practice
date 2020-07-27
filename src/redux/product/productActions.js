import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  // FETCH_PRODUCTS_FAILURE,
} from "./productTypes";
import data from "../../data/data.json";

const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

// const fetchProductsFailure = (error) => {
//   return {
//     type: FETCH_PRODUCTS_FAILURE,
//     payload: error.message,
//   };
// };

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest());

  // External API option
  // fetch("https://fakestoreapi.com/products?limit=5")
  //   .then((res) => res.json())
  //   .then((res) => dispatch(fetchProductsSuccess(res)))
  //   .catch((error) => dispatch(fetchProductsFailure(error.message)));

  dispatch(fetchProductsSuccess(data));
};
