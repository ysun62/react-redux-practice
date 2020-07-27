import React from "react";
import { connect } from "react-redux";
import BackHomeButton from "./BackHomeButton";

function Cart({ products, history }) {
  return (
    <div>
      <BackHomeButton />
      <h2>Cart Page</h2>
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} style={{ marginTop: "30px" }}>
              <img
                src={require(`../assets/${product.image}`)}
                alt={product}
                style={{ cursor: "pointer" }}
                onClick={() => history.push(`/product/${product.id}`)}
              />
              <div>{product.title}</div>
              <div>Quantity: {product.quantity}</div>
              <div>Price: ${product.totalPrice}</div>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart && state.cart.products,
});

export default connect(mapStateToProps)(Cart);
