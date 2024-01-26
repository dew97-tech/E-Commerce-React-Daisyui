import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/ProductDetails.jsx";
import Layout from "./layout.jsx";
import Products from "./components/Products.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Hero from "./components/Hero.jsx";
import { ProductProvider } from "./context/ProductContext";
import About from "./components/About.jsx";
import { ThemeContextProvider } from "./context/ThemeContext";

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
      <Auth0Provider
         domain={import.meta.env.VITE_APP_DOMAIN}
         clientId={import.meta.env.VITE_APP_CLIENT_ID}
         authorizationParams={{
            redirect_uri: window.location.origin,
         }}
      >
         <ThemeContextProvider>
            <ProductProvider>
               <RouterProvider router={router} />
            </ProductProvider>
         </ThemeContextProvider>
      </Auth0Provider>
   </React.StrictMode>
);
