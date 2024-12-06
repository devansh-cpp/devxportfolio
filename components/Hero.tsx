import React from 'react';
import Image from 'next/image';
import { FaDownload } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function HomePage() {
  return (
    <>
      <div className="container sm:mx-auto px-32 sm:relative flex justify-center text-[#DAC5A7] sm:h-[720px] overflow-hidden">
        
        <div className="sm:flex hidden">
          
        {/* Left Section */}
        <div className="w-2/5 mt-48 p-8 flex justify-center items-start">
          <div>
            <h1 className="text-8xl text-white font-bold mb-4">Hello<span className="text-[#DAC5A7] text-[100px]">.</span></h1>
            <h1 className="text-4xl font-bold mb-4">- I&#39;am Devansh Mishra</h1>
            <h1 className="text-2xl text-white font-semibold mb-4">A Passionate Programmer</h1>
            <a href="./Resume.pdf" download>
            
            <button className="absolute z-30 text-black border-2 border-[#DAC5A7] hover:bg-transparent duration-300 hover:text-[#DAC5A7]  font-semibold px-12 py-4 mt-4 bg-[#DAC5A7] rounded-lg flex justify-center items-center gap-2">
            <FaDownload />Download CV </button>
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="w-[350px] bg-[#DAC5A7] relative flex items-baseline">
          {/* Image with absolute positioning and z-index */}
          <div className="absolute -inset-16 w-[450px] flex justify-center items-baseline z-10">
            <Image
              src="/me.png"  // Replace with your actual image path
              alt="Centered Image"
              width={500}  // Set your desired image width
              height={500} // Set your desired image height
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 mt-48 p-8 flex justify-center items-start">
          <div>
            <p className="text-lg mt-4 font-thin opacity-75 text-[#DAC5A7]">
            I am a web developer with a strong interest in Data Structures and Algorithms (DSA). I have hands-on experience working with the MERN stack and possess proficiency in languages like JavaScript, Java, and C++.
            </p>
            <h1 className="mt-12 ml-8 flex items-center gap-4 text-2xl font-semibold">Let&#39;s Talk <FaArrowRightLong className="hover:animate-bounceHorizontal" /></h1>
          </div>
        </div>
          {/* Black Vintage Blur Effect */}
          <div className="sm:flex hidden absolute z-20 bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-transparent to-transparent filter"></div>
        </div>

        {/* Phone View */}
        <div className="sm:hidden flex flex-col items-center justify-center mt-12 mx-auto">
        
        <div className="pr-8 flex justify-center items-start">
          <div>
            <h1 className="text-5xl text-white font-bold mb-4">Hello<span className="text-[#DAC5A7] text-[100px]">.</span></h1>
            <h1 className="text-2xl font-bold mb-4">- I&#39;am Devansh Mishra</h1>
            <h1 className="text-xl text-white font-thin mb-4">A Passionate Programmer</h1>
            <div className="flex justify-center items-start">
          <div>
            <p className="text-sm mt-4 font-thin opacity-75 text-[#DAC5A7]">
            I am a web developer with a strong interest in Data Structures and Algorithms (DSA). I have hands-on experience working with the MERN stack and possess proficiency in languages like JavaScript, Java, and C++.
            </p>
          </div>
        </div>
        <div className="w-[300px] flex justify-center">
            <Image
              src="/me2.png"  // Replace with your actual image path
              alt="Centered Image"
              width={230}  // Set your desired image width
              height={200} // Set your desired image height
              className=""
            />
          </div>
          <div className="flex py-4 justify-center items-center gap-4">

          <h1 className="mt-4 flex items-center gap-4 text-sm font-semibold">Let&#39;s Talk <FaArrowRightLong className="hover:animate-bounceHorizontal" /></h1>
          <a href="./Resume.pdf" download>
            <button className="text-black border-2 border-[#DAC5A7] hover:bg-transparent duration-300 hover:text-[#DAC5A7] z-50 font-semibold px-2 py-2 mt-4 bg-[#DAC5A7] rounded-lg flex justify-center items-center gap-2">
            <FaDownload /> Download CV</button>
            </a>
          </div>
          </div>
        </div>
        </div>
     </div>
    </>
  );
}

export default HomePage;
