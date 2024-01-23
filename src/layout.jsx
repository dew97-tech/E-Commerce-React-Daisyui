import React from "react";
import Navbar from "@/components/navbar";
import Footer from "./components/Footer";
export default function Layout({ children }) {
   return (
      <>
         <div className='flex flex-col items-stretch min-h-screen'>
            <Navbar />
            {children}
            <Footer />
         </div>
      </>
   );
}
