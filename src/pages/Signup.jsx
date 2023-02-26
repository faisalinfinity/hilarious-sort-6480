import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  auth,
  googleProvider,
  loginAction,
  manualSignin,
  signup,
} from "../redux/auth/authAction";
import { FcGoogle } from "react-icons/fc";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Blue } from "../constants/theme";
import { useNavigate ,Link} from "react-router-dom";


export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast =useToast()

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

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = () => {
    if (Firstname === "" || Lastname === "" || password === "" || email === "")
      alert("Fill all Details First");
    else dispatch(signup(Firstname + " " + Lastname, email, password,toast,navigate));
  };
  return (
    <>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
       Create An Account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input onChange={handleFirstName} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange={handleLastName} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleEmail}  type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={handlePassword} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link style={{color:"blue"}} to="/login" >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex></>
  );
}
