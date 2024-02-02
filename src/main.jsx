import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductProvider } from "./context/ProductContext";
import { ThemeContextProvider } from "./context/ThemeContext";
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Auth0Provider
         domain={import.meta.env.VITE_APP_DOMAIN}
         clientId={import.meta.env.VITE_APP_CLIENT_ID}
         authorizationParams={{
            redirect_uri: window.location.origin,
         }}
         cacheLocation='localstorage'
      >
         <ThemeContextProvider>
            <ProductProvider>
               <RouterProvider router={router} />
            </ProductProvider>
         </ThemeContextProvider>
      </Auth0Provider>
   </React.StrictMode>
);
