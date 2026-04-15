import React from "react";
import {assets}  from "../assets/img/assets";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row border border-gray-400 min-h-[400px] lg:min-h-[500px]">
      {/* Hero left side */}
      <div className="hero_left w-full lg:w-1/2 flex items-center justify-center py-8 sm:py-12 lg:py-0 px-4 sm:px-8 lg:px-12">
        <div className="text-[#414141] text-center lg:text-left max-w-md">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <p className="w-6 sm:w-8 lg:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-xs sm:text-sm lg:text-base">
              OUR BESTSELLER
            </p>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-relaxed mb-4 lg:mb-6">
            Latest Arrivals
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <p className="font-semibold text-xs sm:text-sm lg:text-base">SHOP NOW</p>
            <p className="w-6 sm:w-8 lg:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <div className="hero_right w-full lg:w-1/2 relative">
        <img 
          src={assets.hero_img} 
          alt="Hero Image" 
          className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
