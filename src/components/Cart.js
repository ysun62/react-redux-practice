import React from "react";
import { connect } from "react-redux";
import BackHomeButton from "./BackHomeButton";
import CartProduct from "./CartProduct";

function Cart({ products, history }) {
  return (
    <div>
      <BackHomeButton />
      <h2>Cart Page</h2>
      {products &&
        products.map((product) => {
          return (
            <CartProduct key={product.id} product={product} history={history} />
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart && state.cart.products,
});

export default connect(mapStateToProps)(Cart);
