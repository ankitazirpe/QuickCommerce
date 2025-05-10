import React from "react";
import {
  Apple,
  Sandwich,
  CupSoda,
  Snowflake,
} from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50 ">
      <div className="w-[3%] h-5 m-5 animate-spin">
        <Apple
        className="w-15 h-15 text-red-600 text-4xl "/>
      </div>
      <div className="w-[3%] h-5 m-5 animate-spin">
        <Sandwich
        className="w-15 h-15 text-amber-900 text-4xl "/>
      </div>
      <div className="w-[3%] h-5 m-5 animate-spin">
        <CupSoda
        className="w-15 h-15 text-amber-300 text-4xl "/>
      </div>
      <div className="w-[3%] h-5 m-5 animate-spin">
        <Snowflake
        className="w-15 h-15 text-blue-300 text-4xl "/>
      </div>
    </div>
  );
};

export default Loader;