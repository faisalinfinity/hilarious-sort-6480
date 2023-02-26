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
  Link,
  Center,
  Image,
  useDisclosure,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/cart/cartAction";
 


  const TimerComponent=()=>{
    const [timer, setTimer] = useState(300);
    const UseRef = useRef(null);
    const navigate=useNavigate()
  
    const fixTimestr = (time) => {
      return time < 10 ? `0${time}` : time;
    };
    const formattimetostring = (time) => {
      const seconds = time % 60;
      const minutes = Math.floor(time / 60) % 60;
  
      const outputStr = `${fixTimestr(minutes)}:${fixTimestr(seconds)}`;
      return outputStr;
    };
  
  
    useEffect(() => {
      StartTimer();
  
      const CleanupFunc = () => {
        StopTimer();
      };
      return CleanupFunc;
    }, []);
  
    const StartTimer = () => {
      if (UseRef.current !== null) {
        return;
      }
  
      UseRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
              navigate("/dashboard")
            clearInterval(UseRef.current);
          }
          return prev - 1;
        });
     
      }, 1000);
    };
  
    const StopTimer = () => {
      clearInterval(UseRef.current);
      UseRef.current = null;
    };
  
    const ResetTimer = () => {
      setTimer(90);
      StopTimer();
    };
  
   
    return(
      <VStack>
              <Text fontSize={"15px"} fontWeight={"bold"}>
                Complete payment within .. {formattimetostring(timer)}
              </Text>
              {/* <Slider
              w={"100%"}
                aria-label="slider-ex-2"
                colorScheme="red"
               defaultValue={300}
               value={timer}
               min={0}
               max={300}
               
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider> */}
            </VStack>
    )
  }


export default function Payment() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const price=+localStorage.getItem("price")
  const [showPassword, setShowPassword] = useState(false);

  const [visible,setvisible]=useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  const navigate=useNavigate()
  const Redirect=()=>{
    let timeout=setTimeout(()=>{
        navigate("/cart")

    },3000)
  }

  const {cart}=useSelector((store)=>store.cart)
  const [item,setItem]=useState(0)
  const [total,setTotal]=useState(0)
 const dispatch=useDispatch()
 const {uid}=useSelector((store)=>store.auth)

  useEffect(()=>{
    setItem(cart.length)
    let sum=0
    cart.map((el)=>{
      sum+=el.price*(+el.quantity)
      return el
    })
    setTotal(sum)
    
  },[cart])

  useEffect(()=>{
   dispatch(getCart(uid))
  },[uid])
 
  return (
    <>
      
      {visible?<Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
         Your Payment has been Successful , We will update your plans in next 24 hrs 
         Please check Your email for Invoice , Thank You!
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
       
      />
    </Alert>:null}

     
      <Grid
        templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <VStack>
            <br />
          <HStack>
        
          </HStack>
          <VStack display={"flex"} spacing={"10"}>
            <Heading>
              Total 
            </Heading>
            <Center fontWeight={"bold"} fontSize={"15px"}>
               {item} Items with total cost ₹ {+total+15*80} including delivery charges
              </Center>
            <VStack>
              <Image w="50px" src={cart?.length && cart[0].image} ></Image>
                  <Text>{cart?.length&&cart[0].title}</Text>
                  <Text fontWeight={"bold"}>{cart?.length!==0 && cart.length>1 && "and More Items"}</Text>
            </VStack>

            <TimerComponent/>
          </VStack>
        </VStack>

        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Payment Gateway
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}></Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="card" isRequired>
                <FormLabel>Card Number</FormLabel>
                <Input maxLength="16" type="text" />
              </FormControl>
              <FormControl id="password" isRequired>
                <InputGroup>
                  <Input maxLength={"4"} placeholder="MM/YY"></Input>
                  <Input
                    maxLength="3"
                    placeholder="CVV"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Center>
                <Text fontWeight={"bold"}>
                  Or Pay with Unified Payment Interface
                </Text>
              </Center>

              <Center>
                <Button
                  onClick={() => {
                    setOverlay(<OverlayTwo />);
                    onOpen();
                  }}
                  loadingText="Submitting"
                  size="md"
                  w={"sm"}
                  bg={"white"}
                  color={"white"}
                  border="1px solid grey"
                  _hover={{
                    bg: "white",
                    border: "2px solid #2c4bff",
                    color: "#2c4bff",
                  }}
                >
                  <Flex justifyContent={"center"} alignItems="center">
                    <Image
                      height={"30%"}
                      w={"50%"}
                      src="https://cdn.iconscout.com/icon/free/png-128/upi-2085056-1747946.png"
                    ></Image>
                  </Flex>
                </Button>
              </Center>

              <Stack spacing={10} pt={2}>
                <Button
                onClick={()=>{
                    setvisible(true)
                    Redirect()
                }}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#2c4bff"}
                  color={"white"}
                  _hover={{
                    bg: "white",
                    border: "1px solid #2c4bff",
                    color: "#2c4bff",
                  }}
                >
                Complete Payment
                </Button>
              </Stack>
              <Stack pt={6}></Stack>
            </Stack>
          </Box>
        </Stack>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>
              <Center fontSize={"15px"}>
                Your Payment is secured with SSL Bit Protection
              </Center>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <Image
                  w={"50%"}
                  alt="abc"
                  src="https://i.postimg.cc/s2xyd14p/qr.jpg"
                ></Image>
                <Text fontWeight={"bold"}>
                  Scan with any UPI app to make payment
                </Text>
                <Image
                  width={"40%"}
                  src="data:image/png;base64,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"
                ></Image>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                bg={"#f1041c"}
                color="white"
                _hover={{
                  bg: "white",
                  border: "1px solid #f1041c",
                  color: "black",
                }}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
        
      </Grid>
    </>
  );
}
