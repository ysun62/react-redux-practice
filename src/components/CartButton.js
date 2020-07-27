import React from "react";
import { connect } from "react-redux";

function CartButton({ cart }) {
  return (
    <>
      <button>
        <span>{cart.totalQuantity}</span> &nbsp; Cart
      </button>
      <h4>Subtotal: ${cart.subTotal}</h4>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartButton);
