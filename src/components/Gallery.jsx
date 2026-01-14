import React from 'react'

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <img className="rounded-xl hover:scale-105 transition duration-300" src="/g1.jpg" />
      <img className="rounded-xl hover:scale-105 transition duration-300" src="/g2.jpg" />
      <img className="rounded-xl hover:scale-105 transition duration-300" src="/g3.jpg" />
    </div>
  );
};

export default Gallery;
