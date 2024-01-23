import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const [productsPerPage] = useState(10);

   useEffect(() => {
      async function fetchData() {
         const res = await fetch("https://fakestoreapi.com/products");
         const json = await res.json();

         setProducts(json);
         setIsLoading(false);
      }

      fetchData();
   }, []);

   // Get current products
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

   // Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <section className='bg-white py-8'>
         <div className='container mx-auto flex items-center flex-wrap pt-4 pb-12'>
            <nav id='store' className='w-full z-30 top-0 px-6 py-1'>
               <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3'>
                  <a
                     className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl '
                     href='#'
                  >
                     Store
                  </a>
               </div>
            </nav>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
               {(isLoading ? Array.from({ length: productsPerPage }) : currentProducts).map((product, index) => (
                  <div
                     key={index}
                     className='flex flex-col bg-white p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300'
                  >
                     {isLoading ? (
                        <div className='flex flex-col gap-8 w-52'>
                           <div className='skeleton h-32 w-full'></div>
                           <div className='skeleton h-4 w-28'></div>
                           <div className='skeleton h-4 w-full'></div>
                           <div className='skeleton h-4 w-full'></div>
                        </div>
                     ) : (
                        <Link to={`/products/${product.id}`} className='cursor-pointer'>
                           <img
                              className='object-contain object-center w-full h-48 mb-4 rounded-lg'
                              src={product.image}
                              alt={product.title}
                           />
                           <div className='flex items-center justify-between'>
                              <p className='text-gray-800  font-bold'>{product.title}</p>
                           </div>
                           <p className='text-gray-700 mt-2'>{`£${product.price.toFixed(2)}`}</p>
                        </Link>
                     )}
                  </div>
               ))}
            </div>

            <div className='join mt-10 flex justify-end w-full'>
               {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map((number) => (
                  <button
                     key={number}
                     onClick={() => paginate(number + 1)}
                     className={`join-item btn ${currentPage === number + 1 ? "btn-active" : ""}`}
                  >
                     {number + 1}
                  </button>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Products;
