import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/img/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productData]);

  return productData ? (
    <div className="border-t-2 pt-6 sm:pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ---------- Product Data ---------- */}
      <div className="flex gap-6 sm:gap-8 lg:gap-12 flex-col lg:flex-row">
        {/* ---------- Product Images ---------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:gap-4 lg:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2 sm:gap-0">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer h-16 sm:h-20 lg:h-24 object-cover border border-gray-200 hover:border-gray-400 transition-colors"
                alt="Product Images"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" alt="" />
          </div>
        </div>
        {/* ---------- Product Info ---------- */}
        <div className="flex-1 px-4 sm:px-0">
          <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl mt-2 leading-tight">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-3 sm:mt-4">
            <img src={assets.star_icon} alt="Star icon" className="w-3 sm:w-4" />
            <img src={assets.star_icon} alt="Star icon" className="w-3 sm:w-4" />
            <img src={assets.star_icon} alt="Star icon" className="w-3 sm:w-4" />
            <img src={assets.star_icon} alt="Star icon" className="w-3 sm:w-4" />
            <img
              src={assets.star_dull_icon}
              alt="Dull star icon"
              className="w-3 sm:w-4"
            />
            <p className="pl-2 text-sm sm:text-base">(122)</p>
          </div>
          <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base lg:w-4/5 leading-relaxed">
            {productData.description}
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 my-6 sm:my-8">
            <p className="text-sm sm:text-base font-medium">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-3 sm:px-4 bg-gray-100 text-sm sm:text-base transition-colors ${
                    item === size ? "border-orange-500 bg-orange-50" : "hover:border-gray-400"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!size}
          >
            {size ? "ADD TO CART" : "SELECT SIZE"}
          </button>
          <hr className="mt-6 sm:mt-8 lg:w-4/5" />
          <div className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-5 flex flex-col gap-1 sm:gap-2">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ---------- */}

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <div className="flex flex-col sm:flex-row">
          <b className="border px-4 sm:px-5 py-3 text-sm sm:text-base cursor-pointer hover:bg-gray-50 transition-colors">Description</b>
          <p className="border px-4 sm:px-5 py-3 text-sm sm:text-base cursor-pointer hover:bg-gray-50 transition-colors">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 border px-4 sm:px-6 py-4 sm:py-6 text-xs sm:text-sm text-gray-500 leading-relaxed">
          <p>
            Discover the perfect blend of style and comfort with our premium
            clothing collection. From casual essentials to statement pieces,
            we've got something for every occasion. Designed with quality
            fabrics and modern trends in mind, our outfits ensure you look your
            best effortlessly. Shop now and redefine your style!
          </p>
          <p>
            Refresh your look with our trendy and versatile clothing range. Each
            piece is crafted to combine comfort, durability, and modern flair.
            Find your perfect fit and step out in confidence today!
          </p>
        </div>
      </div>

      {/* ---------- Display related products ---------- */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
