import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { fetchProducts } from "./redux/product/productActions";
import Products from "./components/Products";
import Product from "./components/Product";
import CartButton from "./components/CartButton";

function App({ products, fetchProducts }) {
  useEffect(() => {
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <header>
        <CartButton />
      </header>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Products products={products} {...props} />}
        />
        <Route
          path={`/product/:id`}
          render={(props) => <Product data={products.data} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
