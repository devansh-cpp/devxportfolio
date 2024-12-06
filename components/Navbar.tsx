"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState("");
  const [textcolor, setTextcolor] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-[#DAC5A7]");
        setTextcolor("text-black"); // Change text color to black when scrolling down
      } else {
        setNavbarBg("bg-transparent");
        setTextcolor("text-[#DAC5A7]"); // Reset text color at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to Projects section
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Scroll to Projects section
  const handleScrollToFollow = () => {
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`${navbarBg} sm:flex hidden fixed top-0 left-0 w-full justify-between items-center px-5 py-3 transition duration-300 z-50`}
      >
        <div className={`container mx-auto px-32 flex justify-between items-center`}>
          {/* Left side links */}
          <div className={`${textcolor} flex gap-5`}>
            <Link href={'./about'} className="hover:text-gray-600">About Me</Link>
            <button onClick={handleScrollToProjects} className="hover:text-gray-600">
              Projects
            </button>
          </div>

          {/* Logo */}
          <Link href={'./'}>
            <Image
              src="/devxlogo.png"
              alt="Logo"
              width={150} // Adjusted for better responsiveness
              height={100} // Adjusted for better responsiveness
            />
          </Link>

          {/* Right side links */}
          <div className={`${textcolor} flex gap-5`}>
            <a href="https://www.linkedin.com/in/devanshcpp/">

            <button className="hover:text-gray-600">Linkedin</button>
            </a>
            <button onClick={handleScrollToFollow} className="hover:text-gray-600">Contact</button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-[#DAC5A7] z-30 w-[100vw] sm:hidden fixed top-0 left-0 mb-14 flex justify-between items-center p-2">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src="/devxlogo.png"
            alt="Logo"
            width={150} // Adjusted for better responsiveness
            height={100} // Adjusted for better responsiveness
          />
        </Link>

        {/* Hamburger icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
          <FaBars size={24} />
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 right-5 bg-white shadow-md rounded-lg p-3 space-y-2 w-[150px]">
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
              Home
            </button>
            <Link href={'./'}
              onClick={handleScrollToProjects}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
            >
              Projects
            </Link>
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded">
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
