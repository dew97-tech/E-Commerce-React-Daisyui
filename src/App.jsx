import * as React from "react";
import Layout from "./layout";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
   return (
      <Layout>
         <Hero />
         <Products />
      </Layout>
   );
}

export default App;
