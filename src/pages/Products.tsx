import React, { FC, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Filterbar from "../components/Filterbar";
import ProductsList from "../components/ProductsList";
import Searchbar from "../components/Searchbar";
import { iProduct } from "../iProduct";
import Product from "./Product";

const Products: FC = () => {
  const products: any = useLoaderData();

  if (products === undefined) return <h1>Loading...</h1>;

  return (
    <>
      <section>
        <Searchbar />
        <Filterbar />
      </section>
      <main>
        <ProductsList products={products} />
      </main>
    </>
  );
};

export default Products;
