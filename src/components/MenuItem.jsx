import React from 'react'

const MenuItem = ({ image, title, price }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-accent mt-2">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
