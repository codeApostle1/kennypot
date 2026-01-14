
import React from 'react'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
   const [open, setOpen] = useState(false);
   
  const handleToggle = () => setOpen(prev => !prev);
  const handleLinkClick = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">Kenny’s Pot</h1>

          <button
        className="menu-btn md:hidden text-white cursor-pointer focus:outline-none"
        onClick={handleToggle}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}

      </button> 

        {/* <ul className={`hidden md:flex gap-8 nav-links ${open ? "open" : ""}` }> */}
          <ul className={`${open ? "nav-links flex text-lg font-medium; flex-col absolute top-16 left-0 w-full bg-white/80 md:bg-transparent md:flex md:static px-5 py-5 md:w-auto" : "hidden md:flex  "} md:gap-8 md:text-white  nav-links`}>
 
  <li className="hover:text-white transition cursor-pointer"><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
  <li className="hover:text-accent transition cursor-pointer"><NavLink to="/menu" onClick={handleLinkClick}>Menu</NavLink></li>
  <li className="hover:text-accent transition cursor-pointer">Gallery</li>
  <li className="hover:text-accent transition cursor-pointer">Contact</li>
</ul>
        {/* </ul> */}

       
      </div>
    </nav>
  );
};

export default Navbar;



/**
 * Navbar component for the application.
 * 
 * This component renders a responsive navigation bar with links to different sections of the application.
 * It includes a toggle button for mobile view that opens and closes the menu.
 * 
 * The toggle functionality has been improved to ensure that the menu closes automatically 
 * when the window is resized to a width of 768 pixels or more, enhancing the user experience 
 * on larger screens.
 * 
 * @component
 * @example
 * return (
 *   <Navbar />
 * );
 */