import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";
import CartDetails from "../components/CartDetails";
import SignInPage from "@/components/Sign-In";

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
   {
      path: "/cart",
      element: (
         <Layout>
            <CartDetails />
         </Layout>
      ),
   },
   {
      path: "/sign-in",
      element: (
         <Layout>
            <SignInPage />
         </Layout>
      ),
   },
]);

export { router };
