import React from "react";
import { useSelector } from "react-redux";
import Loginpage from "../pages/Loginpage";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) return children;

  return <Loginpage />;
};

export default PrivateRoute;
