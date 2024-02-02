import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Categories = () => {
   const { categories, setSelectedCategory } = useContext(ProductContext);

   const handleCategoryClick = (category) => {
      setSelectedCategory(category);
   };

   return (
      <>
         <div className='flex md:ml-auto md:mr-0 items-center justify-end flex-shrink-0 space-x-2'>
            <button
               onClick={() => handleCategoryClick(null)}
               className='inline-flex py-2 px-5 rounded-lg items-center bg-primary text-white hover:bg-blue-600 focus:outline-none transition-all duration-300'
            >
               All
            </button>
            {categories.map((category, index) => (
               <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className='inline-flex py-2 px-5 rounded-lg items-center bg-gray-200 hover:bg-gray-300 focus:outline-none transition-all duration-300 capitalize'
               >
                  {category}
               </button>
            ))}
         </div>
      </>
   );
};

export default Categories;
