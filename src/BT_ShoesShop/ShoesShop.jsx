import React from "react";
import data from "./data.json";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
class ShoesShop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectProduct: null,
    };
  }
  handleSelect = (product) => {
    console.log(product);
    this.setState({ selectProduct: product });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-danger">shoes shop</h1>
        <ProductList products={data} onSelect={this.handleSelect} />
        <ProductDetail product={this.state.selectProduct} />
      </div>
    );
  }
}

export default ShoesShop;
