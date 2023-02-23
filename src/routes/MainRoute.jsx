import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "../pages/Cartpage";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Payment from "../pages
import SingleProduct from "../pages
import Signup from "../pages/Signup";
import PrivateRoute from ".

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/cart" element={<PrivateRoute><Cartpage/></PrivateRoute>}></Route>
      <Route path="/login" element={<Loginpage />}></Rout
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/product/:id" element={<SingleProduct />}></Route>
      <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
      <Route path="*" element={<Signup/>}></Route>
      <Route path="*" element={<h1>404 Page not found</h1>}></Rout
    </Routes>
  );
};

export default MainRoute;
