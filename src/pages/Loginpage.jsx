import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  auth,
  googleProvider,
  loginAction,
  manualSignin,
} from "../redux/auth/authAction";
import { FcGoogle } from "react-icons/fc";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { Blue } from "../constants/theme";
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const SignInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user);
        const { displayName, email } = res.user;
        console.log(displayName, email);
        dispatch(loginAction(res.user.providerData, navigate));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRemember = (e) => {
    localStorage.setItem("remember", e.target.checked);
  };
  const handleEmail = (e) => {
    !e.target.value.includes("@")
      ? (e.target.style.border = "2px solid red")
      : (e.target.style.border = "2px solid black");
    setemail(e.target.value);
  };

  const handlePassword = (e) => {
    e.target.value.length < 8 || !e.target.value.includes("@")
      ? (e.target.style.border = "1px solid red")
      : (e.target.style.border = "1px solid black");
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (email.includes("@productify") && password === "productify") {
      navigate("/admin");
    } else {
      dispatch(manualSignin(navigate, email, password));
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack  spacing={8} mx={"auto"} maxW={"md"}  py={1} px={6}>
          <Stack  align={"center"}>
            <Box bg={Blue} p="7px" color={"white"}>
              {" "}
              To buy and sell on www.productify.com or other productify sites
              internationally, existing users can login using their credentials
              or new users can register an eBay account on ebay.in. Kindly note
              you can no longer buy or sell on productify.in.
            </Box>
            <Heading fontSize={"2xl"}>Hello</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Sign in to Productify or{" "}
              <Link href="/signup" color={"blue.400"}>
                create an account
              </Link>{" "}
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack maxH={"sm"} spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={handleEmail} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={handlePassword} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox onChange={handleRemember}>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={Blue}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Button
            bg={"#ffff"}
            border="1px solid"
            borderRadius="20px"
            leftIcon={<FcGoogle size={"30px"} />}
            onClick={SignInWithGoogle}
          >
            Login with Google
          </Button>
        </Stack>
      </Flex>
    </>
  );
}
