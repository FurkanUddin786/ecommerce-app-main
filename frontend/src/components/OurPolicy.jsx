import React from "react";
import { assets } from "../assets/img/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-8 sm:gap-12 md:gap-4 lg:gap-8 text-center py-12 sm:py-16 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="policies flex-1 max-w-xs mx-auto">
        <img
          src={assets.exchange_icon}
          className="w-10 sm:w-12 m-auto mb-4 sm:mb-5"
          alt="Exchange icon "
        />
        <p className="font-semibold mb-2">Easy Exchange Policy</p>
        <p className="text-gray-400 text-xs sm:text-sm">We offer hassle free exchange policy</p>
      </div>
      <div className="policies flex-1 max-w-xs mx-auto">
        <img
          src={assets.quality_icon}
          className="w-10 sm:w-12 m-auto mb-4 sm:mb-5"
          alt="Quality icon "
        />
        <p className="font-semibold mb-2">7 days return policy</p>
        <p className="text-gray-400 text-xs sm:text-sm">We provide 7 days free return policy</p>
      </div>
      <div className="policies flex-1 max-w-xs mx-auto">
        <img
          src={assets.support_img}
          className="w-10 sm:w-12 m-auto mb-4 sm:mb-5"
          alt="Support icon "
        />
        <p className="font-semibold mb-2">Best customer support</p>
        <p className="text-gray-400 text-xs sm:text-sm">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
