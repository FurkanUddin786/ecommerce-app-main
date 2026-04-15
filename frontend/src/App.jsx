import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Preloader from "./components/PreLoader";
import { ShopContext } from "./context/ShopContext";
import ChatBot from "./components/ChatBot";

const App = () => {
  const { preLoader, setPreLoader, showSearch } = useContext(ShopContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle body overlay when search is shown
  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
      document.body.className = "body_overlay";
    } else {
      document.body.style.overflow = "auto";
      document.body.className = "";
    }
  }, [showSearch]);

  return (
    <>
      {preLoader ? (
        <Preloader />
      ) : (
        <div>
          <SearchBar />
          <ToastContainer />
          <Navbar />
          <div className="px-3 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
          </div>
          <ChatBot />
        </div>
      )}
    </>
  );
};

export default App;
