import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPreview from '../components/AboutPreview'
import FeaturedMenu from '../components/FeaturedMenu'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      

         <main>
             <div className="bg-slate-50">
      {/* Welcome text ABOVE hero */}

      <section className="pt-10 pb-5 text-center">
        <p className="text-gray-500 italic">Welcome to</p>
        <h1 className="text-4xl md:text-5xl font-bold text-red-600">
          Kenny’s Pot
        </h1>
      </section>

            <Hero  /> 
            <FeaturedMenu />
            <AboutPreview />
            <Services />
            </div>
         </main>
       
      
    </>
  )
}

export default Home