import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/ProductDetails.jsx";
import Layout from "./layout.jsx";
import Products from "./components/Products.jsx";
import Hero from "./components/Hero.jsx";
import { ProductProvider } from "./context/ProductContext";
import About from "./components/About.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <Layout>
            <Hero />
            <Products />
         </Layout>
      ),
   },
   {
      path: "/products",
      element: (
         <Layout>
            <Products />
         </Layout>
      ),
   },
   {
      path: "/about",
      element: (
         <Layout>
            <About />
         </Layout>
      ),
   },
   {
      path: "/products/:id",
      element: (
         <Layout>
            <ProductDetails />
         </Layout>
      ),
   },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ProductProvider>
         <RouterProvider router={router} />
      </ProductProvider>
   </React.StrictMode>
);
