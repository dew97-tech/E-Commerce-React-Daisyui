import * as React from "react";
import Layout from "./layout";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Featured from "./components/Featured";

function App() {
   return (
      <Layout>
         {/* Hero */}
         <Hero />
         {/* Products */}
         <Products />
         {/* Featured */}
         <Featured />
      </Layout>
   );
}

export default App;
