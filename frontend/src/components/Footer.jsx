import React from "react";
import { assets } from "../assets/img/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 sm:mt-16">
      <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[3fr_1fr_1fr] gap-8 sm:gap-12 md:gap-14 mb-8 sm:mb-10 text-sm">
        <div className="text-center md:text-left">
          <img src={assets.logo} className="mb-4 sm:mb-5 w-20 sm:w-24 mx-auto md:mx-0" alt="logo image" />
          <p className="w-full md:w-2/3 text-gray-600 text-xs sm:text-sm leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            fugiat, porro aspernatur ratione in nobis adipisicing elit?
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg sm:text-xl font-medium mb-4 sm:mb-5">Company</p>
          <ul className="flex flex-col gap-2 sm:gap-1 text-gray-600">
            <NavLink to="/" className="hover:text-black transition-colors">
              <p className="text-xs sm:text-sm">HOME</p>
            </NavLink>
            <NavLink to="/about" className="hover:text-black transition-colors">
              <p className="text-xs sm:text-sm">About Us</p>
            </NavLink>
            <NavLink to="/delivery" className="hover:text-black transition-colors">
              <p className="text-xs sm:text-sm">Delivery</p>
            </NavLink>
            <NavLink to="/privacy-policy" className="hover:text-black transition-colors">
              <p className="text-xs sm:text-sm">Privacy Policy</p>
            </NavLink>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg sm:text-xl font-medium mb-4 sm:mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 sm:gap-1 text-gray-600">
            <li>
              <a href="tel:+1-234-567-8901" className="text-xs sm:text-sm hover:text-black transition-colors">
                +1-234-567-8901
              </a>
            </li>
            <li>
              <a href="mailto:Example@contact.com" className="text-xs sm:text-sm hover:text-black transition-colors">
                Example@contact.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-200" />
        <p className="py-4 sm:py-5 text-xs sm:text-sm text-center text-gray-500">
          Copyright 2024 @ LuxeLabels.com - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;