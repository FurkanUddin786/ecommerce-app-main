import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/img/assets";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer shadow-[0px_2px_5px_#00000021] hover:shadow-[0px_4px_8px_#00000025] transition-shadow duration-300"
      to={`/product/${id}`}
    >
      <div className="group">
        <div className="overflow-hidden relative">
          <div className="absolute top-1/2 -translate-y-2/3 -right-6 sm:-right-8 flex items-center justify-between flex-col p-1 sm:p-1.5 gap-1 sm:gap-2 bg-white group-hover:right-0 z-10 duration-500 shadow-lg">
            <button className="w-3 sm:w-4 h-auto m-auto p-1 hover:bg-gray-100 rounded transition-colors">
              <img src={assets.view_icon} alt="view icon" />
            </button>
            <button className="w-3 sm:w-4 h-auto m-auto p-1 hover:bg-gray-100 rounded transition-colors">
              <img src={assets.heart_icon} alt="heart icon" />
            </button>
            <button className="w-3 sm:w-4 h-auto m-auto p-1 hover:bg-gray-100 rounded transition-colors">
              <img src={assets.add_to_cart_icon} alt="add to cart icon" />
            </button>
          </div>
          <img
            className="group-hover:scale-110 transition ease-in-out duration-300 w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover"
            src={image[0]}
            alt={name}
          />
        </div>
        <div className="px-2 sm:px-3 pb-2 sm:pb-3 bg-white">
          <p className="pt-2 sm:pt-3 pb-1 sm:pb-2 text-xs sm:text-sm line-clamp-2">{name}</p>
          <p className="text-xs sm:text-sm font-medium">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
