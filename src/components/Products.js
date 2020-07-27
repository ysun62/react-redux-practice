import React from "react";

function Products({ products, history }) {
  return (
    <div>
      <h2>List of Products</h2>
      {products.loading && <div>Loading...</div>}
      {products.data &&
        products.data.map((product) => {
          return (
            <div style={{ marginTop: "50px" }} key={product.id}>
              <img
                src={require(`../assets/${product.image}`)}
                alt="product"
                style={{ cursor: "pointer" }}
                onClick={() => history.push(`/product/${product.id}`)}
              />
              <div>{product.title}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Products;
