import { useState, createContext } from "react";
import { products } from "../assets/img/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  // Live text the user is typing in the search input
  const [searchQuery, setSearchQuery] = useState("");
  // The term actually applied to filter products (set when user submits/selects)
  const [appliedSearch, setAppliedSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [preLoader, setPreLoader] = useState(true);
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    // Only allow numbers (0 or positive integers)
    if (quantity < 0 || !Number.isInteger(quantity)) {
      return;
    }

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const createOrderFromCart = () => {
    const cartData = [];
    let totalAmount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const productData = products.find((product) => product._id === items);
          if (productData) {
            const orderItem = {
              _id: items,
              name: productData.name,
              image: productData.image[0],
              price: productData.price,
              size: item,
              quantity: cartItems[items][item],
            };
            cartData.push(orderItem);
            totalAmount += productData.price * cartItems[items][item];
          }
        }
      }
    }

    if (cartData.length === 0) {
      toast.error("Your cart is empty");
      return null;
    }

    const order = {
      items: cartData,
      totalAmount: totalAmount,
      deliveryFee: delivery_fee,
      finalAmount: totalAmount + delivery_fee,
      orderDate: new Date().toISOString(),
      status: "pending"
    };

    // Store order in localStorage (you can later integrate with backend)
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    toast.success("Order placed successfully!");
    return order;
  };

  const clearCart = () => {
    setCartItems({});
  };

  const value = {
    products,
    currency,
    delivery_fee,
    searchQuery,
    setSearchQuery,
    appliedSearch,
    setAppliedSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    createOrderFromCart,
    clearCart,
    navigate,
    preLoader,
    setPreLoader
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
