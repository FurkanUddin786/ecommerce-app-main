import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/img/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartData.length === 0) {
      alert("Your cart is empty. Please add some products before proceeding to checkout.");
      return;
    }
    navigate("/place-order");
  };

  return (
    <div className="border-t- pt-8 sm:pt-14">
      <div className="text-xl sm:text-2xl mb-4 sm:mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 sm:py-6 border-t border-b text-gray-700 grid grid-cols-1 sm:grid-cols-[4fr_2fr_0.5fr] items-start sm:items-center gap-4"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20 h-16 sm:h-20 object-cover flex-shrink-0"
                  alt="Product image"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-lg font-medium line-clamp-2">
                    {productData.name}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mt-2">
                    <p className="text-sm sm:text-base font-medium">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 py-1 border bg-slate-50 text-xs sm:text-sm w-fit">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-2">
                <div className="flex items-center gap-2">
                  <label className="text-xs sm:text-sm text-gray-600 sm:hidden">Qty:</label>
                  <input
                    type="number"
                    onKeyDown={(e) => {
                      // Allow navigation, control, and digit keys only
                      if (e.ctrlKey || e.metaKey || /^[0-9\b\s]$/.test(e.key) || 
                          ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Delete', 'Tab', 'Escape', 'Enter'].includes(e.key)) {
                        return;
                      }
                      e.preventDefault();
                    }}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      if (value > 0) {
                        updateQuantity(item._id, item.size, value);
                      }
                    }}
                    min={1}
                    step={1}
                    defaultValue={item.quantity}
                    className="border max-w-16 sm:max-w-20 px-2 sm:px-3 py-1 sm:py-2 text-center"
                  />
                </div>
                <img
                  src={assets.bin_icon}
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-4 sm:w-5 cursor-pointer hover:opacity-70 transition-opacity"
                  alt="Bin icon"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center sm:justify-end my-12 sm:my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-center sm:text-end">
            <button
              onClick={handleCheckout}
              disabled={cartData.length === 0}
              className={`text-sm my-6 sm:my-8 px-6 sm:px-8 py-3 w-full sm:w-auto ${
                cartData.length === 0
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-black text-white cursor-pointer hover:bg-gray-800 transition-colors"
              }`}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
