import React from 'react';
import { assets } from '../assets/img/assets';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader-container">
        {/* Logo */}
        <div className="logo-container">
          <img 
            src={assets.logo} 
            alt="Logo" 
            className="logo"
          />
        </div>
        
        {/* Spinning loader */}
        <div className="spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        
      </div>
    </div>
  );
};

export default Preloader;
