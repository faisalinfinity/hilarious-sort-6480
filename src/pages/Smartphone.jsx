import React, { useEffect, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    Image,
    Img,
    Table,
    Td,
    Tr,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import {
    Flex,
    Circle,
    Box,
    usecol,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
   Spinner,
    Text,
  } from "@chakra-ui/react";  
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineRight,AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/products/productAction';
import { SpinnerIcon } from '@chakra-ui/icons';
import {ImSpinner} from 'react-icons/im'
const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};


function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 }
      </Box>
    </Box>
  );
}

const Smartphone = () => {
  const {products,loading}=useSelector((store)=>store.product)
 
  const [grid,setGrid]=useState(true)
  const dispatch=useDispatch()
 useEffect(()=>{
   dispatch(getData())
 },[])
  console.log(products)
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      {/* ------BreadCrumb------ */}
      <Breadcrumb
        spacing="5px"
        separator={<AiOutlineRight color="gray" />}
        m={"5px"}
      >
        <BreadcrumbItem>
          <Link to={"/"}>Productify</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={"/electronics"}>Electronics</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <b>  smartphone </b>
        </BreadcrumbItem>
      </Breadcrumb>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 73%",
          gap: "5px",
          marginTop: "10px",
         
          
        }}
      >
         {/* ------Left Side------ */}
        <div>
          <Accordion allowToggle>
            <AccordionItem m={3}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Cameras & Photos
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
               <Link to="/electronics/cameras"> All Cameras</Link><br/>
               <Link to="/electronics/cameras"> Digital Camera </Link> <br/>
               <Link to="/electronics/cameras"> Camera Drones </Link><br/>

              </AccordionPanel>
            </AccordionItem>

            <AccordionItem m={3}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Cell Phones & Accessories
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Link to="/electronics/smartphone"> All Phones</Link><br/>
               <Link to="/electronics/smartphone"> IPhone </Link> <br/>
               <Link to="/electronics/smartphone"> Phone Accessories  </Link><br/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem m={3}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Computers/Tablet
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Link to="/electronics/computer"> All Computers</Link><br/>
               <Link to="/electronics/computer">All Tablets </Link> <br/>
               <Link to="/electronics/computer"> Computer Accessories </Link><br/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem m={3}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SmartWatches
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Link to="/electronics/smartwatch"> All Smart Watches</Link><br/>
             <Link to="/electronics/smartwatch"> Smart Watches Accessories </Link><br/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem m={3}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Video Games & Console
                  </Box>
                  <AccordionIcon color={"blue"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Link to="/electronics/video_game_console"> All Video Games & Console</Link><br/>
             <Link to="/electronics/video_game_console"> Console Accessories</Link><br/>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
         {/* ------Rigth Side------ */}
        <div>
       {loading?<Spinner  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'/>:
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "24% 24% 24% 24%",
            justifyContent:'space-between',
            gap: '2'
          }}
          className={grid?"gridview":"listview"}
        >
       {
        products?.map((item)=>(
<Flex  w="full" alignItems="center" justifyContent="center" >
      <Box
       
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={item.thumbnail}
          alt={`Picture of ${item.title}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box  display="flex" alignItems="center" justifyContent={"space-between"}>
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              >
              {item.title}
            </Text>
            
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={3} numReviews={384} />{"  "}
          
          </Flex>
          <Box fontSize="2xl" >
              <Box as="span" color={'gray.600'} fontSize="2xl">
              ₹
              </Box>
              {data.price.toFixed(2)}
            </Box>
        </Box>
      </Box>
    </Flex> 
          
        ))
       }
         
     
        </div>
        }
       
         <Table width={'100%'} style={{display:'grid',alignItems:"initial",marginTop:"5px"}}>
          <Tr width={'auto'}>
            <Td backgroundColor={"#1DCBCA"} width="250px" >
            <Text fontSize="lg" fontWeight={'bold'}>Take out the old</Text>
            <Button marginTop={'15px'}>Start Saving <AiOutlineArrowRight m={'3px'}/></Button>
            </Td>
            <Td backgroundColor={"#1DCBCA"}> <Image src="https://i.ebayimg.com/thumbs/images/g/YcwAAOSwmnFeBkB6/s-l960.webp" alt="electronics items"/></Td>
          </Tr>
          </Table> 
       
          <Text fontSize="3xl" fontWeight={'bold'} m={"5px"}>Refurbished, Backed by a One-or-Two-Year Warranty</Text>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "20% 20% 20% 20% 20%",
            gap: 5
          }}
        >
          <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
      
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" >
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
         </div>
         <Table width={'100%'} style={{display:'grid',alignItems:"initial",marginTop:"5px"}}>
          <Tr width={'auto'}>
            <Td backgroundColor={"#1DCBCA"} width="250px" >
            <Text fontSize="lg" fontWeight={'bold'}>Sello on Productify</Text>
            <Button marginTop={'15px'}>More Info <AiOutlineArrowRight m={'3px'}/></Button>
            </Td>
            <Td backgroundColor={"#1DCBCA"}> <Image src="https://www.forbes.com/advisor/wp-content/uploads/2022/04/Image_-_Sell_products_online_.jpeg.jpg" alt="electronics items"/></Td>
          </Tr>
          </Table> 
        </div>
       
       
      </div>
    </div>
  )
}

export default Smartphone
