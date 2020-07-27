import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productTypes";

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

const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error.message,
  };
};

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest());

  fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((res) => dispatch(fetchProductsSuccess(res)))
    .catch((error) => dispatch(fetchProductsFailure(error.message)));

  // Backup FAKER API option
  // let products = [];
  // for (let i = 0; i < 5; i++) {
  //   const product = {
  //     id: i,
  //     title: Faker.commerce.productName(),
  //     price: Faker.commerce.price(),
  //     image: Faker.image.cats(),
  //   };
  //   products.push(product);
  // }

  // dispatch(fetchProductsSuccess(products));
};
