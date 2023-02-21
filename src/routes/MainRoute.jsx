import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "../pages/Cartpage";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Payment from "../pages/Payment";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/cart" element={<Cartpage />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="**" element={<h1>404 Page not found</h1>}></Route>
    </Routes>
  );
};

export default MainRoute;
