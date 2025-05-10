import React from "react";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const sellerName = "Raj Sapale";

  const products = [
    { id: 1, name: "Fresh Mango", stock: 20, price: 120 },
    { id: 2, name: "Organic Rice", stock: 45, price: 80 },
    { id: 3, name: "Farm Eggs", stock: 100, price: 6 },
  ];

  const orders = [
    { id: 101, product: "Fresh Mango", quantity: 3, status: "Pending" },
    { id: 102, product: "Farm Eggs", quantity: 12, status: "Delivered" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#15616d]">Welcome, {sellerName}</h1>
      
      <button 
          onClick={() =>(navigate("//seller-login"))}
          className="mt-4 mb-4 px-4 py-2 bg-[#15616d] text-white rounded hover:bg-[#ff7d00]">Log Out</button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border-1 border-gray-400 shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#9e0059]">Your Products</h2>
          <ul className="space-y-3">
            {products.map((p) => (
              <li key={p.id} className="flex justify-between border-b pb-2">
                <span>{p.name}</span>
                <span>{p.stock} in stock | ₹{p.price}</span>
              </li>
            ))}
          </ul>
          <button 
          onClick={() =>(navigate("/seller-dashboard-add-product"))}
          className="mt-4 px-4 py-2 bg-[#15616d] text-white rounded hover:bg-[#ff7d00]">Add Product</button>
        </div>

        <div className="bg-white border-1 border-gray-400 shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#9e0059]">Recent Orders</h2>
          <ul className="space-y-3">
            {orders.map((order) => (
              <li key={order.id} className="flex justify-between border-b pb-2">
                <span>{order.product} x{order.quantity}</span>
                <span className={order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}>{order.status}</span>
              </li>
            ))}
          </ul>
          <button className="mt-4 px-4 py-2 bg-[#15616d] text-white rounded hover:bg-[#ff7d00]">Manage Orders</button>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
