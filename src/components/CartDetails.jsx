import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CartDetails = () => {
   const { cart, clearCart, products, filterProductsBySearch, setCart, calculateTotalPrice } =
      useContext(ProductContext);

   const handleQuantityChange = (productId, newQuantity) => {
      const updatedCart = cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item));
      setCart(updatedCart); // Update the cart state
      filterProductsBySearch(); // Refresh the filtered products
   };

   const handleRemoveItem = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart); // Update the cart state
      filterProductsBySearch(); // Refresh the filtered products
   };

   return (
      <div className='container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg overflow-hidden'>
         <h1 className='text-3xl font-semibold mb-6'>Shopping Cart</h1>
         <table className='table w-full mb-8 border border-3 rounded-lg'>
            <thead>
               <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th className="text-center">Action</th>
               </tr>
            </thead>
            <tbody>
               {cart.map((cartItem) => {
                  const product = products.find((p) => p.id === cartItem.id);

                  return (
                     <tr key={cartItem.id}>
                        <td>
                           <img src={product.image} alt={product.title} className='w-12 h-12 object-contain object-center rounded' />
                        </td>
                        <td className='whitespace-nowrap'>{product.title}</td>
                        <td>{product.category}</td>
                        <td>
                           <input
                              type='number'
                              min='1'
                              value={cartItem.quantity}
                              onChange={(e) => {
                                 const newQuantity = parseInt(e.target.value);
                                 handleQuantityChange(cartItem.id, newQuantity);
                              }}
                              className='w-12 text-center p-2 border border-gray-300 rounded'
                           />
                        </td>
                        <td>{(cartItem.quantity * product.price).toFixed(2)} €</td>
                        <td className="text-center">
                           <button className='btn btn-sm btn-error p-2' onClick={() => handleRemoveItem(cartItem.id)}>
                              Remove
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>

         <div className='flex justify-between'>
            <button className='btn btn-sm btn-error p-2 mr-4' onClick={clearCart}>
               Clear Cart
            </button>
            <div className='text-xl font-semibold'>Total: {calculateTotalPrice()} €</div>
            <button className='btn btn-sm btn-primary p-2 ml-4'>Checkout</button>
         </div>
      </div>
   );
};

export default CartDetails;
