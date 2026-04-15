import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-8 sm:my-10">
      <div className="text-center text-2xl sm:text-3xl py-6 sm:py-8">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-5/6 sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          delectus, libero aut minus animi velit!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 gap-y-4 sm:gap-y-6">
        {bestSeller.map((item, index) => (
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
  );
};

export default BestSeller;
