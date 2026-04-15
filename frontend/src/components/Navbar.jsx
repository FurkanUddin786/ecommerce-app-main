import React, { useContext, useState } from "react";
import { assets } from "../assets/img/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, clearCart, navigate } = useContext(ShopContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearCart();
    navigate("/login");
  };

  return (
    <header className="relative px-5">
      <div className="flex items-center justify-between py-3 pb-6 sm:py-5 sm:pb-8 font-medium">
        <Link to="/">
          <img src={assets.logo} className="w-16 sm:w-20 md:w-24" alt="logo image" />
        </Link>
        <ul className="hidden lg:flex gap-3 xl:gap-5 text-xs xl:text-sm text-gray-700">
          <NavLink to="/" className="menu_link flex flex-col items-center ga-1">
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="/about"
            className="menu_link flex flex-col items-center ga-1"
          >
            <p>ABOUT</p>
          </NavLink>
          <NavLink
            to="/collection"
            className="menu_link flex flex-col items-center ga-1"
          >
            <p>COLLECTION</p>
          </NavLink>
          <NavLink
            to="/contact"
            className="menu_link flex flex-col items-center ga-1"
          >
            <p>CONTACT</p>
          </NavLink>
        </ul>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <img
            onClick={() => setShowSearch(prev => !prev)}
            src={assets.search_icon}
            className="w-4 sm:w-5 cursor-pointer"
            alt="search icon"
          />
          <div className="group relative">
            <Link to='/login'>
              <img
                src={assets.profile_icon}
                className="w-4 sm:w-5 cursor-pointer"
                alt="profile icon"
              />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2 z-50">
              <div className="flex flex-col gap-2 w-32 sm:w-36 py-3 px-3 sm:px-5 bg-slate-100 text-gray-500 rounded text-xs sm:text-sm">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <Link to="/orders"><p className="cursor-pointer hover:text-black">Orders</p></Link>
                <p onClick={handleLogout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-4 sm:w-5 min-w-4 sm:min-w-5"
              alt="cart icon"
            />
            <p className="absolute right-[-4px] sm:right-[-5px] bottom-[-4px] sm:bottom-[-5px] w-3 sm:w-4 text-center leading-3 sm:leading-4 bg-black text-white aspect-square rounded-full text-[7px] sm:text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            src={assets.menu_icon}
            onClick={() => setVisible(true)}
            className="w-4 sm:w-5 cursor-pointer lg:hidden"
            alt="menu icon"
          />
        </div>
        {/* Sidebar menu for smaller screen */}
        <div
          className={`fixed top-0 bottom-0 right-0 overflow-hidden bg-white transition-all duration-300 z-50 ${
            visible ? "w-full sm:w-80" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600 h-full">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-4 cursor-pointer border-b"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt="dropdown icon"
              />
              <p className="font-medium">Back</p>
            </div>
            <div className="flex flex-col">
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 transition-colors"
                to="/"
                onClick={() => setVisible(false)}
              >
                Home
              </NavLink>
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 transition-colors"
                to="/collection"
                onClick={() => setVisible(false)}
              >
                Collection
              </NavLink>
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 transition-colors"
                to="/about"
                onClick={() => setVisible(false)}
              >
                About
              </NavLink>
              <NavLink
                className="py-4 pl-6 border-b hover:bg-gray-50 transition-colors"
                to="/contact"
                onClick={() => setVisible(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
        {/* Overlay for mobile menu */}
        {visible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setVisible(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
