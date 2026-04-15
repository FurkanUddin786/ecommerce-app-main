import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/img/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, appliedSearch, setAppliedSearch, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCatogery = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCatogery = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (appliedSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(appliedSearch.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, appliedSearch, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 py-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt="Dropdown icon"
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleCatogery}
                type="checkbox"
                className="w-3"
                value={"Men"}
                id="men"
              />{" "}
              <label htmlFor="men">Men</label>
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCatogery}
                type="checkbox"
                className="w-3"
                value={"Women"}
                id="women"
              />{" "}
              <label htmlFor="women">Women</label>
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCatogery}
                type="checkbox"
                className="w-3"
                value={"Kids"}
                id="kids"
              />{" "}
              <label htmlFor="kids">Kids</label>
            </p>
          </div>
        </div>
        {/* Sub Catogery Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubCatogery}
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                id="topwear"
              />{" "}
              <label htmlFor="topwear">Topwear</label>
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCatogery}
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                id="bottomwear"
              />{" "}
              <label htmlFor="bottomwear">Bottomwear</label>
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCatogery}
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                id="winterwear"
              />{" "}
              <label htmlFor="winterwear">Winterwear</label>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        
        {/* Search Status and Clear Button */}
        {appliedSearch && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Showing results for:</span>
              <span className="text-sm font-medium text-blue-700">"{appliedSearch}"</span>
              <span className="text-sm text-gray-500">({filterProducts.length} products)</span>
            </div>
            <button
              onClick={() => setAppliedSearch("")}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Clear Search
            </button>
          </div>
        )}
        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
