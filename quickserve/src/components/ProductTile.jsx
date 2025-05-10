import React from "react";

const ProductTile = () => {

    const product={
        name: "Fresh Mangoes",
        price: 120,
        image: "https://www.melissas.com/cdn/shop/files/4-pounds-image-of-honey-mangos-fruit-1125637415_512x512.jpg?v=1738768090",
      }
  return (
    <div className="w-48 bg-white rounded-xl shadow-lg hover:shadow-xl p-4 transition-all duration-300 cursor-pointer m-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h3 className="text-md font-semibold text-gray-800 truncate">{product.name}</h3>
      <p className="text-green-600 font-bold text-lg mt-1">₹{product.price}</p>
    </div>
  );
};

export default ProductTile;
