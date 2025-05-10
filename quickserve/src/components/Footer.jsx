import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 mt-10 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-3">QuickServe</h3>
          <p className="text-gray-500">Fast delivery of groceries and essentials at your doorstep.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2">
            <li>Fruits & Vegetables</li>
            <li>Dairy & Bakery</li>
            <li>Snacks & Beverages</li>
            <li>Instant Foods</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Customer Service</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li>Email: ankitazirpe@gmail.com</li>
            <li>Email: rajsapale555@gmail.com</li>
            <li>Phone: 222-333-8880</li>
            <li>Location: Pune, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} QuickServe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
