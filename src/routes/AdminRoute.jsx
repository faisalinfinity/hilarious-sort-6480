import { useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Admin from "../pages/Admin";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";

const AdminRoute = ({ children }) => {
  const toast = useToast();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const email = user[0]?.email;
  if (isLoggedIn && email.includes("@productify.com")) return children;
  else
    toast({
      title: "You are not an Admin.",
      description: "Restricted Route",
      status: "error",
      duration: 2000,
      isClosable: true,
    });

  if (!isLoggedIn) return <Loginpage />;
  else return <Homepage />;
};

export default AdminRoute;
