import React from "react";

import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import ProductCard from "../components/ProductCard";
import Checkout from "../pages/Checkout";
import CategoryDetails from "../pages/CategoryDetails";
import SellerLogin from "../seller/SellerLogin";
import SellerSignUp from "../seller/SellerSignUp";
import SellerDashboard from "../seller/SellerDashboard";
import AddProduct from "../seller/ProductAdd";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <Home>
                <Login />
              </Home>
            </MainLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <MainLayout>
              <Home>
                <Cart />
              </Home>
            </MainLayout>
          }
        />

        <Route
          path="/product"
          element={
            <MainLayout>
              <ProductCard />
            </MainLayout>
          }
        />

        <Route
          path="/category/:categoryName"
          element={
            <MainLayout>
              <CategoryDetails />
            </MainLayout>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/seller-registration" element={<SellerSignUp/>} />
        <Route path="/seller-login" element={<SellerLogin/>} />
        <Route path="/seller-dashboard" element={<SellerDashboard/>}/>
        <Route path="/seller-dashboard-add-product" element={<AddProduct/>}/>
      </Routes>
    </>
  );
}
