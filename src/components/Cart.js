import React from "react";
import { connect } from "react-redux";
import BackHomeButton from "./BackHomeButton";
import CartProduct from "./CartProduct";

function Cart({ cartProducts, history }) {
  return (
    <div>
      <BackHomeButton />
      <h2>Cart Page</h2>
      {cartProducts &&
        cartProducts.map((product) => {
          return (
            <CartProduct key={product.id} product={product} history={history} />
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
});

export default connect(mapStateToProps)(Cart);
