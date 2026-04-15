import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-xl sm:text-2xl">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>
      <div className="flex flex-col gap-3 sm:gap-2 mt-4 sm:mt-2 text-sm sm:text-base">
        <div className="flex justify-between items-center py-2">
          <p>Subtotal</p>
          <p className="font-medium">
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between items-center py-2">
          <p>Shipping Fee</p>
          <p className="font-medium">
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between items-center py-2 bg-gray-50 px-3 sm:px-4 rounded">
          <b className="text-base sm:text-lg">Total</b>
          <b className="text-base sm:text-lg">
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
