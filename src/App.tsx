import { FC, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import { iProduct } from "./iProduct";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ProductsLayout from "./pages/ProductsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          // { index: true, element: <Products />, loader: () => PRODUCTS },
          {
            index: true,
            element: <Products />,
            loader: async () => {
              const fetchProducts = await fetch(
                "http://localhost:8080/api/v1/products"
              );
              const response = await fetchProducts.json();
              return response;
            },
          },
          // { path: ":id", element: <Product /> },
          {
            path: ":id",
            element: <Product />,
            loader: async ({ params }) => {
              const fetchProducts = await fetch(
                `http://localhost:8080/api/v1/products/${params.id}`
              );
              const response = await fetchProducts.json();
              return response;
            },
          },
        ],
      },
    ],
  },
]);

const App: FC = () => {
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const fetchProducts = await fetch(
  //       "http://localhost:8080/api/v1/products"
  //     );
  //     const response = await fetchProducts.json();
  //     setProducts(response);
  //   };
  //   getProducts();
  // }, []);

  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
