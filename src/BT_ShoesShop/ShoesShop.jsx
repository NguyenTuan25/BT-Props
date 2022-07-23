import React from "react";
import data from "./data.json";
import ProductList from "./ProductList";
const ShoesShop = () => {
  return (
    <div className="container">
      <h1 className="text-center text-danger">shoes shop</h1>
      <ProductList products={data} />
    </div>
  );
};

export default ShoesShop;
