import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <div className="row mt-5">
      <div className="col-sm-6">
        <img src={product.image} alt="" />
      </div>
      <div className="col-sm-6">
        <h1>Thông số kỹ thuật</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>alias:</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>description:</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>shortDescription:</td>
              <td>{product.shortDescription}</td>
            </tr>
            <tr>
              <td>quantity:</td>
              <td>{product.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
