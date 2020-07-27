import React, { useState } from "react";
import { connect } from "react-redux";

import { updateProduct } from "../redux/cart/cartActions";
import { calcSubTotal } from "../utils";

function CartProduct({ product, history, updateProduct }) {
  const [number, setNumber] = useState(product.quantity);

  const totalPrice = calcSubTotal(number, product.price);

  const onUpdate = () => {
    if (number !== product.quantity)
      updateProduct(number, totalPrice, product.id);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <img
        src={require(`../assets/${product.image}`)}
        alt={product}
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/product/${product.id}`)}
      />
      <div>{product.title}</div>
      <div>Price: ${product.price}</div>
      <div>
        Quantity:{" "}
        <input
          type="number"
          min="1"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>Total: ${totalPrice}</div>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (number, totalPrice, id) =>
    dispatch(updateProduct(number, totalPrice, id)),
});

export default connect(null, mapDispatchToProps)(CartProduct);
