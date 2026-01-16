import { NavLink } from "react-router-dom";
import header from '../assets/kennylogo.png'

import { FaAddressCard, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { MdLocationOn } from "react-icons/md"
import { IoIosCall } from "react-icons/io"

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-[url('/footer-bg.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Logo */}
        <img src={header} alt="Kenny’s Pot Logo" className="h-40 mb-10 mx-auto lg:mx-0" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">Kenny’s Pot</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Kenny’s Pot is dedicated to serving authentic, flavorful meals
              prepared with fresh ingredients in a warm and welcoming atmosphere.
            </p>

            {/* Socials */}
            <ul className="flex gap-4 mt-6">
              <li><FaFacebook className="text-xl hover:text-white transition hover:-translate-y-2 inline-block cursor-pointer" /></li>
              <li><FaInstagram className="text-xl hover:text-white transition hover:-translate-y-2 inline-block cursor-pointer" /></li>
              <li><FaTiktok className="text-xl hover:text-white transition hover:-translate-y-2 inline-block cursor-pointer" /></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/" className="hover:text-white transition">Home</NavLink></li>
              <li><NavLink to="/menu" className="hover:text-white transition">Menu</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition">Contact</NavLink></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon – Fri: 10:00 AM – 10:00 PM</li>
              <li>Saturday: 11:00 AM – 11:00 PM</li>
              <li>Sunday: 12:00 PM – 9:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-xl text-white hover:text-white transition hover:translate-x-1 inline-block " />
                <span>123 Food Street, City</span>
              </li>
              <li className="flex items-center gap-3">
                <IoIosCall className="text-xl text-white hover:text-white transition hover:translate-x-1 inline-block" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 ">
                <FaAddressCard className="text-xl text-white hover:text-white transition hover:translate-x-1 inline-block" />
                <span>contact@kennyspot.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Kenny’s Pot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
