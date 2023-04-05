import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "../pages/Cartpage";
import Electronics from "../pages/Electronics";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Payment from "../pages/Payment";

import SingleProduct from "../pages/SingleProduct";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Fashion from "../pages/Fashion";
import Home from "../pages/Home";
import Toys from "../pages/Toys";
import Jewellary from "../pages/Jewellary";
import Sports from "../pages/Sports";
import Admin from "../pages/Admin";
import MyOrder from "../pages/MyOrder";
import AdminRoute from "./AdminRoute";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />
      <Route path="/electronic" element={<Electronics />}></Route>
      <Route path="/electronic/:id" element={<SingleProduct />} />
      <Route path="/fashion" element={<Fashion />}></Route>
      <Route path="/fashion/:id" element={<SingleProduct />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/home/:id" element={<SingleProduct />} />
      <Route path="/toys" element={<Toys />}></Route>
      <Route path="/toys/:id" element={<SingleProduct />} />
      <Route path="/jewellary" element={<Jewellary />}></Route>
      <Route path="/jewellary/:id" element={<SingleProduct />} />
      <Route path="/sports" element={<Sports />}></Route>
      <Route path="/sports/:id" element={<SingleProduct />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cartpage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/product/:id" element={<SingleProduct />}></Route>
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="*" element={<h1>404 Page not found</h1>}></Route>
      <Route
        path="/order"
        element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default MainRoute;
