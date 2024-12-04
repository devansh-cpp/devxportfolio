import React from 'react';
import Image from 'next/image';
import { CardSpotlight } from './ui/card-spotlight';
import { ExpandableCardDemo } from './ui/grid-card';

function Marquee() {
  const images = [
    { src: '/java.png', alt: 'Java Logo' },
    { src: '/python.png', alt: 'Python Logo' },
    { src: '/html.png', alt: 'HTML Logo' },
    { src: '/css.png', alt: 'HTML Logo' },
    { src: '/js.png', alt: 'JavaScript Logo' },
    { src: '/node.png', alt: 'CSS Logo' },
    { src: '/mongo.png', alt: 'CSS Logo' },
    { src: '/mysql.png', alt: 'CSS Logo' },
    { src: '/cpp.png', alt: 'CSS Logo' },
    { src: '/react.png', alt: 'CSS Logo' },
    { src: '/ts.png', alt: 'CSS Logo' },
    { src: '/canva.png', alt: 'CSS Logo' },

  ];

  return (
    <>
    <div className="p-4  sm:py-24 w-full">
      <h1 className='md:text-5xl sm:mb-12 text-2xl font-bold text-[#DAC5A7] text-center p-2'>Tech Stack</h1>
    <div className="flex flex-wrap sm:gap-14 gap-1 justify-center items-center  ">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={45}
            height={25}
            className="relative hover:scale-125 duration-200"
          />
        ))}
      </div>
    </div>
    <div className='p-4 sm:py-12'>
     <h1 className='text-center sm:mb-14 md:text-5xl text-2xl text-[#DAC5A7] font-bold p-4'>My Creations</h1>
    <ExpandableCardDemo/>
    </div>
    </>
  );
}

export default Marquee;
