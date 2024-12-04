"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [navbarBg, setNavbarBg] = useState('');
  const [textcolor, setTextcolor] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('bg-[#DAC5A7]');
        setTextcolor('text-black'); // Change text color to black when scrolling down
      } else {
        setNavbarBg('bg-transparent');
        setTextcolor('text-[#DAC5A7]'); // Reset text color at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`${navbarBg} sm:flex hidden fixed top-0 left-0 w-full  justify-between items-center px-5 py-3 transition duration-300 z-50`}>
      <div className={`container mx-auto px-32 flex justify-between items-center`}>
        <div className={`${textcolor} flex gap-5`}>
          <button className="hover:text-gray-600">About Me</button>
          <button className="hover:text-gray-600">Services</button>
        </div>
        <div>
          <Image
            src={'/devxlogo.png'}
            alt={'Logo'}
            width={150} // Adjusted for better responsiveness
            height={100} // Adjusted for better responsiveness
          />
        </div>
        <div className={`${textcolor} flex gap-5`}>
          <button className="hover:text-gray-600">Portfolio</button>
          <button className="hover:text-gray-600">Contact</button>
        </div>
      </div>
    </div>

    <div className="bg-[#DAC5A7] w-[100vw] sm:hidden fixed top-0 left-0 mb-14  flex justify-between items-center p-2">
      <div>
        <Image
          src="/devxlogo.png"
          alt="Logo"
          width={150} // Adjusted for better responsiveness
          height={100} // Adjusted for better responsiveness
        />
      </div>

      {/* Hamburger icon */}
      <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
        <FaBars size={24} />
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-md rounded-lg p-3 space-y-2 w-[150px]">
          <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
            About
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
            Contact
          </a>
        </div>
      )}
    </div>
    </>
  );
}

export default Navbar;
