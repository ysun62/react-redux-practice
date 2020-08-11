import React, { useState } from "react";
import { connect } from "react-redux";

import { updateCartProduct } from "../redux/cart/cartActions";
import { calcSubTotal } from "../utils";

function CartProduct({ product, history, updateCartProduct }) {
  const [quantity, setQuantity] = useState(product.quantity);

  const totalPrice = calcSubTotal(quantity, product.price);

  const onUpdate = () => {
    if (quantity !== product.quantity)
      updateCartProduct(quantity, totalPrice, product.id);
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
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>Total: ${totalPrice}</div>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCartProduct: (number, totalPrice, id) =>
    dispatch(updateCartProduct(number, totalPrice, id)),
});

export default connect(null, mapDispatchToProps)(CartProduct);
