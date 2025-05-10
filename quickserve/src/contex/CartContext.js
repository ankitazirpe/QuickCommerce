import { createContext,useContext, useState } from "react";

export const CartContext = createContext({

 cart : [
        {
          id: 1,
          name: "Organic Bananas",
          price: 45,
          quantity: 2,
          image: "/images/banana.jpg",
        },
        {
          id: 2,
          name: "Fresh Mangoes",
          price: 120,
          quantity: 1,
          image: "/images/mango.jpg",
        },
        {
          id: 3,
          name: "Full Cream Milk (1L)",
          price: 60,
          quantity: 3,
          image: "/images/milk.jpg",
        },
        {
          id: 4,
          name: "Brown Bread",
          price: 30,
          quantity: 1,
          image: "/images/bread.jpg",
        },
      ],
      deleItem : (id) => {}
    }
)


export const useCart = () =>{
    return useContext(CartContext);
}

export const CartProvider = CartContext.Provider;