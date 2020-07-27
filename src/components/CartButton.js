import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CartButton({ cart }) {
  return (
    <>
      <Link to="/cart">
        <button>
          <span>{cart.totalQuantity}</span> &nbsp; Cart
        </button>
      </Link>
      <h4>Subtotal: ${cart.subTotal}</h4>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartButton);
