import React from 'react'
import rice from '../assets/rice.jpg'

const AboutCard = () => {
  return (
    <div className="bg-white rounded shadow-md ">
      <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600">
        <img src={rice} alt="food" className="w-full h-full object-cover" />
      </div>

      <div className="p-4 text-left">
        <h3 className="font-semibold text-lg text-gray-800">
          Quality Meals
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Fresh ingredients and carefully crafted recipes served daily.
        </p>
      </div>
    </div>
  )
}

export default AboutCard