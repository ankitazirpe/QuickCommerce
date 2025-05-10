import  Loader from "../components/Loader" ;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    setLoading(true);
    // login condition
    setTimeout(() => {
      setLoading(false);
      navigate("/seller-dashboard");
    }, 2000);
  };

  return (
    <>
      {loading && <Loader/>}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-[#15616d] mb-6">
            Seller Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e0059]"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e0059]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#9e0059] text-white py-2 rounded-md hover:bg-[#ff7d00]"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Not registered?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/seller-registration")}
            >
              Registration
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SellerLogin;
