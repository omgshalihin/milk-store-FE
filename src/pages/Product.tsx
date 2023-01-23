import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default Product;
