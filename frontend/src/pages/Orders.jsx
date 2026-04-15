import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  // Function to clean up expired orders (older than 10 days)
  const cleanupExpiredOrders = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

    const validOrders = existingOrders.filter(order => {
      const orderDate = new Date(order.orderDate);
      return orderDate > tenDaysAgo;
    });

    // Update localStorage with only valid orders
    localStorage.setItem("orders", JSON.stringify(validOrders));
    return validOrders;
  };

  useEffect(() => {
    // Clean up expired orders and get valid ones
    const validOrders = cleanupExpiredOrders();
    setOrders(validOrders);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-500";
      case "shipped": return "bg-blue-500";
      case "delivered": return "bg-green-500";
      case "cancelled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending": return "Processing";
      case "shipped": return "Shipped";
      case "delivered": return "Delivered";
      case "cancelled": return "Cancelled";
      default: return "Unknown";
    }
  };

  if (orders.length === 0) {
    return (
      <div className="border-t pt-16">
        <div className="text-2xl mb-8">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-6">Your order history will appear here</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-8">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="space-y-6">
        {orders.map((order, orderIndex) => (
          <div key={orderIndex} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            {/* Order Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">#{orderIndex + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Order #{orderIndex + 1}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(order.orderDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">{currency}{order.finalAmount}</p>
                  <p className="text-sm text-gray-600">
                    {order.items.length} item{order.items.length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Order Items */}
            <div className="p-6">
              <div className="space-y-4">
                {order.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200"
                        alt="Product image"
                      />
                      <div className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {item.quantity}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg truncate">{item.name}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="font-medium text-gray-900">{currency}{item.price}</span>
                        <span className="px-2 py-1 bg-gray-200 rounded-md text-xs font-medium">
                          Size: {item.size}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(order.status)}`}></div>
                      <span className="text-sm font-medium text-gray-700">{getStatusText(order.status)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
