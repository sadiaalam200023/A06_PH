import React from 'react';
import Image from 'next/image';
import banner from "@/assets/banner.png"
const hero = () => {
    
    return (
  <div className="px-4 sm:px-6 lg:px-10 mt-4 mb-4">
    <div className="flex flex-col md:flex-row justify-between items-stretch bg-[#15171D] rounded-3xl overflow-hidden">
      
     
      <div className="flex flex-col justify-center gap-3 px-6 py-8 sm:px-10 lg:px-20 flex-1">
        <h2>
          <span className="font-normal text-sm text-green-500">
            WORKOUT LIBRARY
          </span>
        </h2>

        <span className="text-3xl sm:text-4xl text-amber-50 font-bold">
          TRAIN WITH INTENT. LOG EVERY SET.
        </span>

        <p>
          <span className="text-sm text-gray-500">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </span>
        </p>
      </div>

    
      <div className="w-full md:w-2/5 lg:w-1/3 lg:py-4">
        <Image
          src={banner}
          alt="banner image"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
);
};

export default hero;