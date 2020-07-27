import React, { useState } from "react";
import { connect } from "react-redux";

import { addProduct } from "../redux/cart/cartActions";
import { calcSubTotal } from "../utils";

function Product({ data, match, addProduct, history }) {
  const [quantity, setQuantity] = useState(1);

  const paramId = parseInt(match.params.id);
  const product = data.find((p) => p.id === paramId);

  const onAddToCart = () => {
    const price = calcSubTotal(quantity, product.price);
    addProduct(quantity, price, product);
  };

  return (
    <div>
      <button
        style={{ position: "absolute", left: 0, top: 0 }}
        onClick={() => history.push(`/`)}
      >
        Go Back
      </button>
      <h2>Product Page</h2>
      {product && (
        <div>
          <img src={require(`../assets/${product.image}`)} alt={product} />
          <h3>{product.title}</h3>
          <div>${product.price}</div>
          <div>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button onClick={onAddToCart}>Add to cart</button>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (quantity, price, product) =>
    dispatch(addProduct(quantity, price, product)),
});

export default connect(null, mapDispatchToProps)(Product);
