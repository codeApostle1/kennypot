import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  const handleToggle = () => setOpen(prev => !prev);
  const handleLinkClick = () => setOpen(false);

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className={`fixed w-full bg-white/80 shadow-lg backdrop-blur z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Kenny’s Pot</h1>

        <button
          className="md:hidden text-red-600"
          onClick={handleToggle}
          aria-expanded={open}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul
          className={`${
            open
              ? "flex flex-col text-white text-lg font-medium absolute top-16 left-0 w-full bg-red-600 px-5 py-5"
              : "hidden"
          } md:flex md:flex-row md:static md:bg-transparent md:text-red-600 md:gap-8`}
        >
          <li  className="hover:text-accent transition cursor-pointer"><NavLink to="/" onClick={handleLinkClick} className="w-full" >Home</NavLink></li>
          <li  className="hover:text-accent transition cursor-pointer"><NavLink to="/menu" onClick={handleLinkClick} className="w-full">Menu</NavLink></li>
          <li  className="hover:text-accent transition cursor-pointer">Gallery</li>
          <li  className="hover:text-accent transition cursor-pointer">Contact</li>
        </ul>
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