import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { iProduct } from "../iProduct";

interface iProps {
  product: iProduct;
}

const Product: FC<iProps> = () => {
  const params = useParams();
  // const [productId, setProductId] = useState<string>();

  useEffect(() => {
    const productId = params.id;
  }, []);

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.id}</p>
      <p></p>
    </>
  );
};

export default Product;
