import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contex";



const Checkout = () => {

    const navigate=useNavigate()
    const {cart} = useCart()

      const cartItems = cart;


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Product List */}
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price} each</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Qty:</span>
              <span className="px-3 py-1 border rounded">{item.quantity}</span>
              <span className="text-lg font-semibold text-green-600">
                ₹{item.price * item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Button */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
        <h3 className="text-xl font-bold">Total: ₹{total}</h3>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-all cursor-pointer">
          Place Order
        </button>
        
      </div>
      <a className="ml-100 hover:text-blue-600 cursor-pointer"
      onClick={()=>(navigate('/'))}
      >Back to Shoping</a>
    </div>
  );
};

export default Checkout;
