import React from "react";
import breadBanner from "../assets/CateroryBanner/breadBanner.png"
import vegebanner from "../assets/CateroryBanner/vegebanner.png"
import careBanner from "../assets/CateroryBanner/careBanner.png"
import electronicsBanner from "../assets/CateroryBanner/electronicsBanner.png"
import homeBanner from "../assets/CateroryBanner/homeBanner.png"
import instaBanner from "../assets/CateroryBanner/instaBanner.png"
import meatBanner from "../assets/CateroryBanner/meatBanner.png"
import snacksBanner from "../assets/CateroryBanner/snacksBanner.png"
import { useParams } from "react-router-dom";
import { formatCategoryName } from "../utils/formatPrice";


export const categoryBanner= [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: vegebanner
  },
  {
    id: 2,
    name: "Dairy & Bakery",
    image: breadBanner
  },
  {
    id: 3,
    name: "Snacks & Beverages",
    image: snacksBanner
  },
  {
    id: 4,
    name: "Instant & Frozen Foods",
    image: instaBanner
  },
  {
    id: 5,
    name: "Personal Care",
    image: careBanner
  },
  {
    id: 6,
    name: "Household Essentials",
    image: homeBanner
  },
  {
    id: 7,
    name: "Electronics and Appliances",
    image: electronicsBanner
  },
  {
    id: 8,
    name: "Meat & Seafood",
    image: meatBanner
  }
]

export default function CategoryDetails() {
 

const {categoryName} = useParams();

const matchedCategory = categoryBanner.find(
  (item) =>
    formatCategoryName(item.name).toLowerCase() === categoryName.toLowerCase()
);

return (
  <div className="flex flex-col items-center w-screen h-screen">
    {matchedCategory ? (
      <div
        key={matchedCategory.id}
        className="w-[80%] h-[30%] bg-amber-100 rounded-2xl"
      >
        <img
          className="object-cover w-full h-auto rounded-2xl"
          src={matchedCategory.image}
          alt={matchedCategory.name}
        />
      </div>
    ) : (
      <p className="text-xl mt-20 text-red-500">Category not found.</p>
    )}
  </div>
);
}