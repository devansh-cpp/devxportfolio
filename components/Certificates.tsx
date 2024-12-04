"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const certificateData = [
    {
      image: "/googlecertificate.png",
      title: "Crash Course on Python",
      tags: ["#python", "#oops", "#dsa"],
    },
    {
      image: "/webdesigncertificate.png",
      title: "Responsive Web Design",
      tags: ["#webdesign", "#responsiveness", "#javascript","#typescript"],
    },
    {
      image: "/digitalmarketingcertificate.png",
      title: "Digital Marketing Course",
      tags: ["#seo", "#crwalers", "#adsense",'#trafficing'],
    },
    {
      image: "/tnpcertificate.png",
      title: "Technical Head @tnpofficer",
      tags: ["#teammanagement", "#reactjs", "#mernstack"],
    },
    // Add more certificate objects as needed
  ];


export function Certificates() {
  return (
    <div>
        <h2 className="text-center text-2xl  my-4 sm:my-8 sm:text-5xl font-bold  text-[#DAC5A7]">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14  sm:gap-8 mx-auto  px-8 py-2 sm:p-4">
            
      {certificateData.map((certificate, index) => (
        <BackgroundGradient
          key={index}
          className="rounded-[22px] max-w-sm p-2 bg-neutral-50 dark:bg-zinc-900"
        >
          {/* Certificate Image */}
          <Image
            src={certificate.image}
            alt={`${certificate.title} Image`}
            height={800}
            width={800}
            className="object-cover"
          />
          {/* Certificate Title */}
         
          {/* Tags Section */}
          <div className="flex flex-col gap-1 justify-center items-start w-full bg-white dark:bg-transparent px-4 py-4 shadow-xl rounded-lg">
            <p className="font-semibold text-xl text-gray-600 mb-2">{certificate.title}</p>
            <div className="flex flex-wrap gap-2">
              {certificate.tags.map((tag, tagIndex) => (
                <p
                  key={tagIndex}
                  className="px-3 py-1 text-[12px] bg-[#d9dfe3] max-w-max rounded font-semibold text-[#7281a3]"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </BackgroundGradient>
      ))}
  
      
        </div>
     
    </div>
  );
}
