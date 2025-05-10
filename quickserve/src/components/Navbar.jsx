import React from "react";
import logo from "../assets/logo.png";
import {
  Apple,
  Sandwich,
  CupSoda,
  Snowflake,
  User,
  Home,
  Drumstick,
  Plug,
  LayoutGrid,
  Search,
  ShoppingBasket,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { formatCategoryName } from "../utils/formatPrice";



export default function Navbar() {

  const categories = [
    { name: "All", icon: LayoutGrid },
    { name: "Fruits & Vegetables", icon: Apple },
    { name: "Dairy & Bakery", icon: Sandwich },
    { name: "Snacks & Beverages", icon: CupSoda },
    { name: "Instant & Frozen Foods", icon: Snowflake },
    { name: "Personal Care", icon: User },
    { name: "Household Essentials", icon: Home },
    { name: "Meat & Seafood", icon: Drumstick },
    { name: "Electronics and Appliances", icon: Plug },
  ];


  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  const handleCart = () => {
    setTimeout(() => {
      navigate("/cart");
    }, 100);
  };

  const handleCategoery = (category) => {
    if (formatCategoryName(category) === "All") {
      navigate(`/`);
    } else {
      const categoryName = formatCategoryName(category);
      setTimeout(() => {
        navigate(`/category/${categoryName}`);
      }, 100);
    }
  };

 

  return (
    <>
      {/* navbar top */}
      <div className="w-screen h-16 bg-gradient-to-b from-[#2a9d8f] to-white  justify-between flex items-center cursor-pointer">
        <Link className=" w-[15%] h-[100%] ml-2.5 " to="/">
          <img src={logo} alt="logo" className="w-full h-full object-cover " />
        </Link>

        <div className="w-[40%] h-[60%] flex">
          <input
            className="w-[90%] h-[100%]  bg-white  rounded-l-[10px] text-2sm text-black p-2.5"
            type="text"
            placeholder="Search for ......."
          />

          <div className="w-[10%] h-[100%] bg-[#15616d] flex items-center justify-center rounded-r-[10px] ">
            <Search className="w-5 h-5 text-white mr-0.5 " />
          </div>
        </div>
        <div className="w-[20%] h-[60%] flex justify-between mr-5">
          <button
            onClick={handleLogin}
            className="bg-[#ff7d00] w-[45%] h-[100%]  flex items-center justify-center rounded-[10px] p-1 cursor-pointer"
          >
            <h1 className="text-xl font-bold text-white  ">Login</h1>
          </button>

          <button
            onClick={handleCart}
            className="w-[45%] h-[100%] flex justify-center items-center bg-[#ff7d00] rounded-[10px] p-1 cursor-pointer"
          >
            <ShoppingBasket />
          </button>
        </div>
      </div>

      {/* navbar bottom */}
      <div className="w-auto h-14 bg-white border-b-1 border-gray-400 flex justify-between  items-center box-border cursor-pointer mx-15">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              onClick={() => handleCategoery(category.name)}
              key={category.name}
              className="flex justify-center items-center  bg-white  border-none  hover:text-[#15616d] transition "
            >
              <Icon className="w-5 h-5 text-grey mr-0.5 " />
              <span className="text-sm font-normal text-center text-gray-700 hover:text-[#15616d] hover:text-xl transition-all ">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
