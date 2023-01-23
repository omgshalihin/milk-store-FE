import React from "react";
import { Outlet } from "react-router-dom";
import Filterbar from "../components/Filterbar";
import Searchbar from "../components/Searchbar";

const ProductsLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProductsLayout;
