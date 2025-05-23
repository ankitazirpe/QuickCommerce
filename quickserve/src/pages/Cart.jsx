"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contex";


export default function Cart() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const {cart,deleItem} = useCart()

  const [products,setProduct] =useState( cart );

const handleClick =() =>{
  navigate('/checkout')
}

  const cartValue = () => {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum = sum + products[i].price * products[i].quantity;
    }
    return sum;
  };

  const total = cartValue();

   deleItem = (id) =>{
  setProduct((prev) => (prev.filter((item) =>(item.id !== id))))
  }

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                {/* conditional showing cart items  */}

                <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-br from-[#fde0c6] to-[#f9c2e2] shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => {
                            setOpen(false);
                            navigate("/");
                          }}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    {products.length === 0 ? (
                      <h1 className="text-3xl font-bold text-[#ff7d00] mb-10 mt-10">
                        Your Basket is Empty
                      </h1>
                    ) : (
                      <div className="mt-8">
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      alt={product.imageAlt}
                                      src={product.imageSrc}
                                      className="size-full object-cover"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">{product.price}₹</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          onClick={() => (deleItem(product.id))}
                                          type="button"
                                          className="font-medium text-[#9e0059] hover:text-[#ff7d00]"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className="text-2xl font-bold">Total</p>
                        <p className="text-2xl font-bold">{total}₹</p>
                      </div>
                     
                      <div className="mt-6">
                        <button
                          onClick={handleClick}
                          className=" w-[100%] flex items-center justify-center rounded-md border border-transparent bg-[#9e0059] px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-[#ff7d00] transition-all"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            onClick={() => {
                              setOpen(false);
                              navigate("/");
                            }}
                            className="font-medium text-xl text-[#15616d] hover:text-indigo-500 transition-all"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
