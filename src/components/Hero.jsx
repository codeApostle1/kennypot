import React from 'react'


export default function Hero() {
  return (
    <section className="relative  mx-auto   max-w-7xl">
      <div
        className="
          h-[70vh]
          bg-[url('assets/rice.jpg')]
          bg-cover
          bg-center
          rounded-t-[50px]
          overflow-hidden
        "
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 rounded-t-[50px] bg-black/50" />

        {/* Content inside hero */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Authentic Meals, Made with Love
          </h2>

          <p className="mt-4 max-w-xl text-gray-200">
            Experience rich flavors crafted from fresh, local ingredients.
          </p>

          <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}



// const Hero = () => {
//   return (
//     <section className="h-screen bg-[url('assets/foods.jpg')] bg-cover bg-center flex items-center justify-center">




//       <div className="bg-black/70 p-8 rounded-xl text-center max-w-xl">
//         <h1 className="text-5xl md:text-6xl font-bold text-accent">
//           Kenny’s Pot
//         </h1>

//         <p className="mt-4 text-lg text-gray-200">
//           Fresh. Local. Flavorful.
//         </p>

//         <div className="mt-6 flex gap-4 justify-center">
//           <button className="px-6 py-3 bg-accent text-black rounded-full hover:bg-orange-400 transition">
//             View Menu
//           </button>
//           <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
//             Book Table
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

