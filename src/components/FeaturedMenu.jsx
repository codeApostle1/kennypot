import React from 'react';
import DishCard from './DishCard';


const FeaturedMenu = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Dishes
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Some of our customer favorites, prepared fresh every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <DishCard />
          </div>
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
