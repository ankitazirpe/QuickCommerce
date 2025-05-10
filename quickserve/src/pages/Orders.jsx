import React from "react";

const orders = [
  {
    id: "ORD123",
    date: "2025-04-25",
    items: ["Milk", "Bread", "Bananas"],
    total: 220,
    status: "Delivered",
  },
  {
    id: "ORD124",
    date: "2025-04-26",
    items: ["Eggs", "Butter"],
    total: 150,
    status: "On the way",
  },
];

const Order = () => {
  return (
    <div className="h-fit m-5 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Order #{order.id}</span>
              <span className={`text-sm px-2 py-1 rounded ${order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                {order.status}
              </span>
            </div>

            <div className="text-sm text-gray-600">
              Date: {order.date}
            </div>

            <div className="text-sm text-gray-600">
              Items: {order.items.join(", ")}
            </div>

            <div className="text-right font-medium text-gray-800">
              Total: ₹{order.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
