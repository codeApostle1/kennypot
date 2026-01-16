import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPreview from '../components/AboutPreview'
import FeaturedMenu from '../components/FeaturedMenu'
import Services from '../components/Services'
import logo from '../assets/kennylogo.png'

const Home = () => {
  return (
    <>
      

         <main>
             <div className="bg-slate-50">
      {/* Welcome text ABOVE hero */}

      <section className="pt-10 pb-5 text-center">
        <p className="text-gray-500 italic">Welcome to</p>
        <img src={logo} className="w-55 h-auto mx-auto md:w-40 lg:w-48" />

          
        
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