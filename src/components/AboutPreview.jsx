import React from 'react'
import AboutCard from './AboutCard'

const AboutPreview = () => {
  return (
    <section className="bg-slate-100 py-20 mt-[-40px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Us
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          At Kenny’s Pot, we serve carefully prepared meals using fresh
          ingredients, inspired by authentic local recipes.
        </p>

        {/* Carousel */}
        <div className="mt-12 relative overflow-hidden ">
          <div className="flex gap-8 animate-scroll whitespace-nowrap">

            {/* Duplicate cards for infinite effect */}
                        <AboutCard />
                        <AboutCard />
                        <AboutCard />
                        <AboutCard />

                        <AboutCard />
                        <AboutCard />
                        <AboutCard />
                        <AboutCard />
                      </div>
                    </div>

                    {/* Button */}
        <button className="mt-12 px-8 py-3 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default AboutPreview
