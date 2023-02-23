import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "../pages/Cartpage";
import Electronics from "../pages/Electronics";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Payment from "../pages/Payment";
import Smartphone from "../pages/Smartphone";
import SingleProduct from "../pages/SingleProduct"
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute"


const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/electronics" element={<Electronics/>}></Route>
      <Route path="/electronics/smartphone" element={<Smartphone/>}></Route>
      <Route path="/cart" element={<PrivateRoute><Cartpage/></PrivateRoute>}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/product/:id" element={<SingleProduct />}></Route>
      <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="*" element={<h1>404 Page not found</h1>}></Route>
    </Routes>
  );
};

export default MainRoute;
