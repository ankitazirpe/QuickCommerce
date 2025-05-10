import React, { useState } from "react";

export default function ProductCard() {
 const product={
    name: "Organic Bananas",
    description: "Fresh bananas directly from the farm.",
    price: 45,
    image: "/images/banana.jpg", // Make sure this path exists
  }
  const [isClicked, setIsClicked] = useState(true);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setIsClicked(false);
  };

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const sub = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
    if (count === 1) {
      setIsClicked(true);
      setCount(1)
    }
  };

  return (
    <>
      <div className="w-full flex justify-between ">
        <div className="w-[40%] h-[40rem] border-2 ml-40 border-gray-400 rounded-2xl mb-10 mt-10 flex flex-col justify-between items-center">
          <div className="w-auto h-auto flex justify-center items-center object-fill bg-amber-100 mt-40">
            <img
              className="scale-130 hover:scale-150 transition-all"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcEyd89ayjk6RWjZhGMy82ZGe8U0whPJBSA&s "
              alt="image"
            />
          </div>

          {isClicked ? (
            <button
              onClick={handleClick}
              className="w-[60%] h-12 rounded-2xl text-amber-50 font-bold text-xl bg-[#9e0059] mb-10 "
            >
              Add To Basket
            </button>
          ) : (
            <div className="w-[60%] h-12 rounded-2xl bg-white border-2 border-[#9e0059] mb-10 flex justify-center items-center">
              <button
                onClick={sub}
                className=" w-[20%] font-bold text-2xl text-[#9e0059] border-r-4  border-r-[#9e0059] flex items-center justify-center"
              >
                {" "}
                -{" "}
              </button>
              <h1 className="w-[60%] text-[#9e0059] font-bold text-2xl flex items-center justify-center">
                {count}
              </h1>
              <button
                onClick={add}
                className="w-[20%] font-bold text-2xl text-[#9e0059] border-l-4
                 border-l-[#9e0059] flex items-center justify-center"
              >
                {" "}
                +{" "}
              </button>
            </div>
          )}
        </div>

        <div className="w-[40%] h-[20rem] border-2 border-gray-400 mr-30 rounded-2xl mt-10 p-20">
        {product && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{product.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
              <button className="px-4 py-1 bg-[#9e0059] text-white rounded hover:bg-[#ff7d00] transition">
            Buy Now
          </button>
            </div>
          </div>
        )}

        </div>
      </div>
    </>
  );
}
