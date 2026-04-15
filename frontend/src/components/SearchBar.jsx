import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/img/assets";

const SearchBar = () => {
  const {
    products,
    searchQuery,
    setSearchQuery,
    setAppliedSearch,
    showSearch,
    setShowSearch,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  if (!showSearch) return null;

  const query = searchQuery.trim().toLowerCase();
  const suggestions = query
    ? products
        .filter((p) => p.name.toLowerCase().includes(query))
        .slice(0, 6)
    : [];

  const apply = (term) => {
    const value = (term ?? searchQuery).trim();
    if (!value) return;
    setAppliedSearch(value);
    setShowSearch(false);
    navigate("/collection");
  };

  return (
    <div className="search_box border-t border-b bg-gray-50 text-center rounded-lg">
      <div className="relative inline-flex items-center justify-center border border-gray-400 px-3 sm:px-5 py-2 my-4 sm:my-5 rounded-lg w-[95%] sm:w-[90%] bg-white">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && apply()}
          type="text"
          placeholder="Search products"
          className="flex-1 outline-none bg-inherit text-xs sm:text-sm"
        />
        <img
          onClick={() => apply()}
          src={assets.search_icon}
          alt="Search"
          className="w-3 sm:w-4 cursor-pointer"
        />

        {suggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow z-50 max-h-60 overflow-y-auto">
            {suggestions.map((item) => (
              <div
                key={item._id}
                onClick={() => apply(item.name)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs sm:text-sm border-b border-gray-100 last:border-b-0 text-left"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt="Close"
        className="inline w-3 sm:w-4 cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
