import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() =>{
    setLoading(false);
    navigate("/profile");
    },2000)
  };

  return (
    <>
    {loading && <Loader/>}
      <div className="w-1/3 h-[30rem] bg-gradient-to-br from-[#2a9d90be] to-[#15616dfe] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md shadow-gray-500 flex flex-col justify-center items-center ">
        <img src={logo} alt="logo" className="w-1/2 object-contain " />

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-200">
          Login
        </h2>
        <form
          className="flex flex-col justify-center items-center-safe w-[80%]"
          onSubmit={handleSubmit}
        >
          <label className="block text-xl mb-2 text-gray-200">
            Enter Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="10"
            placeholder="e.g. 9876543210"
            className="w-[80%] px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7d00] text-amber-50 placeholder-shown:text-amber-50"
            required
          />
          <button
            type="submit"
            className="w-[80%] bg-[#9e0059] text-white py-2 rounded-md hover:bg-[#ff7d00] transition "
          >
            Send OTP
          </button>
          <div className="w-[40%] flex m-2 justify-center items-center">
            <a
              className="mr-2 hover:text-amber-50 transition-all"
              href="/signup"
            >
              Signup
            </a>
            <p className="mr-2"> | </p>
            <a className="hover:text-amber-50 transition-all" href="/seller-login">
              Seller
            </a>
          </div>
        </form>
      </div>
    
    </>
  );
}
