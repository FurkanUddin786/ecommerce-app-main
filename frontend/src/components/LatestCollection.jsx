import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-8 sm:my-10">
      <div className="text-center py-6 sm:py-8 text-2xl sm:text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-5/6 sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          dolor cumque sit?
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 gap-y-4 sm:gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
