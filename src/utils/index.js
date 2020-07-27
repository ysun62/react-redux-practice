export const calcSubTotal = (quantity, price) => {
  return (quantity * price).toFixed(2);
};

export const containsProduct = (products, id) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return true;
    }
  }

  return false;
};
