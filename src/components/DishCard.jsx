import React from 'react';

import image from '../assets/spag.jpg';

const DishCard = () => {
  return (
    <div className="group bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
      
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt="Featured dish" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Spicy Chicken Stew
          </h3>
          <span className="text-red-600 font-semibold">$12</span>
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Slow-cooked chicken with traditional spices and fresh herbs.
        </p>
      </div>
    </div>
  );
};

export default DishCard;
