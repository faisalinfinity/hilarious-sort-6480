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
  import { Link, useLocation } from "react-router-dom";
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
  
   Spinner,
    Text,
  } from "@chakra-ui/react";  
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineRight,AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {getDataHome } from '../redux/products/productAction';

import { Checkbox, CheckboxGroup, Stack,Heading } from '@chakra-ui/react'
const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
function Star({ rating }) {
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
      
    </Box>
  );
}

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

const Home = () => {
  const {products,loading}=useSelector((store)=>store.product)
 
 
  const [grid,setGrid]=useState(true)
  const dispatch=useDispatch()
 useEffect(()=>{
   dispatch(getDataHome())
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
       
        <Heading size={'sm'} fontWeight={'bold'} marginBottom={"5px"} marginTop={'5px'}>Category</Heading>
     
        <CheckboxGroup colorScheme={'green'}
        
       >
        <Stack  direction={'column'}>
  <Checkbox value={'bags'} colorScheme='green' >
    Mobile
  </Checkbox>
  <Checkbox value={'electronics'} colorScheme='green' >
    Electronics
  </Checkbox>
  <Checkbox value={'jewelery'} colorScheme='green' >
   Jewelery
  </Checkbox>
  <Checkbox value={"men's clothing"} colorScheme='green' >
   Mens clothing
  </Checkbox>
  <Checkbox value={"women's clothing"} colorScheme='green' >
   Womens clothing
  </Checkbox>
  </Stack>
  </CheckboxGroup>

  <Heading size={'sm'} fontWeight={'bold'} marginBottom={"5px"} marginTop={'5px'}>Rating</Heading>
     
     <CheckboxGroup colorScheme={'green'}
     
    >
     <Stack  direction={'column'}>
<Checkbox value={'bags'} colorScheme='green' >
<Star rating={5} />
</Checkbox>
<Checkbox value={'electronics'} colorScheme='green' >
<Star rating={4} />
</Checkbox>
<Checkbox value={'jewelery'} colorScheme='green' >
<Star rating={3} />
</Checkbox>
<Checkbox value={"men's clothing"} colorScheme='green' >
<Star rating={2} />
</Checkbox>
<Checkbox value={"women's clothing"} colorScheme='green' >
<Star rating={1} />
</Checkbox>
</Stack>
</CheckboxGroup>


  <Heading size={'sm'} fontWeight={'bold'} marginBottom={"5px"} marginTop={'5px'}>Price</Heading>
     
        <CheckboxGroup colorScheme={'green'}
        
       >
        <Stack  direction={'column'}>
  <Checkbox value={'bags'} colorScheme='green' >
    Mobile
  </Checkbox>
  <Checkbox value={'electronics'} colorScheme='green' >
    Electronics
  </Checkbox>
  <Checkbox value={'jewelery'} colorScheme='green' >
   Jewelery
  </Checkbox>
  <Checkbox value={"men's clothing"} colorScheme='green' >
   Mens clothing
  </Checkbox>
  <Checkbox value={"women's clothing"} colorScheme='green' >
   Womens clothing
  </Checkbox>
  </Stack>
  </CheckboxGroup>

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
<Flex  w="fit-content" alignItems="center" justifyContent="center" >
     <Link to={`/electronic/${item.id}`}> <Box
       
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
        width={'100%'}
        height={'250px'}
          src={item.image}
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
            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip> */}
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
            <Rating rating={item.rating} numReviews={item.reviews} />{"  "}
          
          </Flex>
          <Box fontSize="2xl" >
              <Box as="span" color={'gray.600'} fontSize="2xl">
              ₹
              </Box>
              {item.price.toFixed(2)}
            </Box>
        </Box>
      </Box>
      </Link>
    </Flex> 
          
        ))
       }
         
     
        </div>
        }
       
        
        </div>
       
       
      </div>
    </div>
  )
}

export default Home
