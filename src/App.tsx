import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import { iProduct } from "./iProduct";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ProductsLayout from "./pages/ProductsLayout";
import Success from "./pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const fetchProducts: Response = await fetch(
            "https://milk-store-be-production.up.railway.app/api/v1/products"
            // "http://localhost:8080/api/v1/products"
          );
          const response: iProduct[] = await fetchProducts.json();
          return response;
        },
      },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          // { index: true, element: <Products />, loader: () => PRODUCTS },
          {
            index: true,
            element: <Products />,
            loader: async () => {
              const fetchProducts: Response = await fetch(
                "https://milk-store-be-production.up.railway.app/api/v1/products"
                // "http://localhost:8080/api/v1/products"
              );
              const response: iProduct[] = await fetchProducts.json();
              return response;
            },
          },
          // { path: ":id", element: <Product /> },
          {
            path: ":id",
            element: <Product />,
            loader: async ({ params }) => {
              const fetchProducts = await fetch(
                `https://milk-store-be-production.up.railway.app/api/v1/products/${params.id}`
                // `http://localhost:8080/api/v1/products/${params.id}`
              );
              const response: iProduct = await fetchProducts.json();
              return response;
            },
          },
          {
            path: ":id/success",
            element: <Success />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
