import React, { useState } from "react";

const Hero = () => {
   const [activeSlide, setActiveSlide] = useState(0);
   const images = [
      {
         url: "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
         title: "Stripy Zig Zag Jigsaw Pillow and Duvet Set",
         description: "View Product",
      },
      {
         url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80",
         title: "Real Bamboo Wall Clock",
         description: "View Product",
      },
      {
         url: "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
         title: "Brown and blue hardbound book",
         description: "View Product",
      },
   ];

   return (
      <>
         <div className='carousel relative container mx-auto' style={{ maxWidth: "1600px" }}>
            <div className='carousel-inner relative overflow-hidden w-full'>
               <div
                  className={`carousel-item absolute custom-transition-opacity duration-1000 ease-in-out`}
                  style={{
                     height: "50vh",
                     backgroundImage: `url('${images[activeSlide].url}')`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     borderRadius: "10px",
                     position: "relative",
                     opacity: 1,
                  }}
               >
                  <div className='h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'>
                     <div className='container mx-auto'>
                        <div className='flex flex-col w-full lg:w-1/2 justify-center items-start px-12 tracking-wide'>
                           <h1 className='text-slate-700 text-5xl mb-4'>{images[activeSlide].title}</h1>
                           <a
                              className='text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black'
                              href='#'
                           >
                              {images[activeSlide].description}
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <button
               className='absolute bottom-8 left-4  bg-gray-800 text-white font-bold py-2 px-4 ms-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 mr-6'
               onClick={() => setActiveSlide((activeSlide - 1 + images.length) % images.length)}
            >
               {`<`}
            </button>
            <button
               className='absolute bottom-8 right-4  bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 mr-6'
               onClick={() => setActiveSlide((activeSlide + 1) % images.length)}
            >
               {">"}
            </button>
         </div>
      </>
   );
};

export default Hero;
