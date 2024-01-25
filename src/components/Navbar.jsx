import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
const Navbar = () => {
   const { setFilteredProducts, setQueryProducts, filterProductsBySearch, queryProducts } = useContext(ProductContext);

   const handleSearch = (e) => {
      setQueryProducts(e.target.value);
   };

   useEffect(() => {
      filterProductsBySearch();
   }, [queryProducts]);

   return (
      <div className='navbar bg-base-100 flex items-center justify-between'>
         <Link to='/' className='mx-2 text-xl font-thin'>
            <div className='flex gap-2 items-center justify-start'>
               <svg fill='currentColor' viewBox='0 0 16 16' height='2em' width='2em'>
                  <path d='M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375 0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375 2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 0h-2v3h2v-3z' />
               </svg>
               Shop Now
            </div>
         </Link>
         <div className=''>
            <Link
               to='/products'
               className='flex gap-2 items-center justify-start text-xl mx-4 font-light text-slate-600'
            >
               {/* <svg fill='currentColor' viewBox='0 0 16 16' height='2em' width='2em'>
                  <path d='M0 2.5A.5.5 0 01.5 2H2a.5.5 0 01.485.379L2.89 4H14.5a.5.5 0 01.485.621l-1.5 6A.5.5 0 0113 11H4a.5.5 0 01-.485-.379L1.61 3H.5a.5.5 0 01-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z' />
               </svg> */}
               Products
            </Link>
            <Link to='/about' className='flex gap-2 items-center justify-start text-xl mx-4 font-light text-slate-600'>
               {/* <svg fill='currentColor' viewBox='0 0 16 16' height='2em' width='2em'>
                  <path d='M12 1a1 1 0 011 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 011-1h8zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z' />
                  <path d='M8 10a3 3 0 100-6 3 3 0 000 6z' />
               </svg> */}
               About
            </Link>
         </div>
         <div className='flex-none gap-3'>
            <div className='form-control'>
               <form className='flex gap-2 items-center justify-start'>
                  {/* <label className='label'>
                     <svg fill='currentColor' viewBox='0 0 16 16' height='2em' width='2em'>
                        <path d='M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z' />
                     </svg>
                  </label> */}
                  <input
                     type='text'
                     placeholder='Search'
                     value={queryProducts}
                     onChange={handleSearch}
                     className='input input-bordered md:w-auto py-1.5'
                  />
               </form>
            </div>
            <div className='dropdown dropdown-end'>
               <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                     <img
                        alt='Tailwind CSS Navbar component'
                        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                     />
                  </div>
               </div>
               <ul
                  tabIndex={0}
                  className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
               >
                  <li>
                     <a className='justify-between'>
                        Profile
                        <span className='badge'>New</span>
                     </a>
                  </li>
                  <li>
                     <a>Settings</a>
                  </li>
                  <li>
                     <a>Logout</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
