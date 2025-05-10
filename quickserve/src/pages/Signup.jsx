import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useUser } from "../contex";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{addUser} = useUser()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    addUser({name:(formData.firstName + " " +formData.lastName),email : formData.email ,address:(formData.address +' ' + formData.city), profilePic : "https://i.pravatar.cc/150?img=3"})
    console.log(formData);
    
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 2500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {loading && <Loader/>}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-gradient-to-br from-[#2a9d90be] to-[#15616dfe] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              maxLength={10}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2 text-sm text-black"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-100 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
