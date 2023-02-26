import React, { useEffect } from 'react'

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Container,
    Center,
    Heading,
    Grid,
    Text

  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../redux/order/orderAction';
  
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
      <Box d="flex" alignItems="center">
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
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductAddToCart({title,status,date,quantity,price,image}) {
    return (
      <Flex p={50}   alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="lg"
          borderWidth="1px"
          w="100%"
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
            src={image}
            w="50%"
            m="auto"
            height={"160px"}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  {status}
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
                {title.slice(0,10)}...
              </Box>
              
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
            
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  ₹
                </Box>
                {price.toFixed(2)*80}
              </Box>
              <Text fontWeight={"bold"} fontSize={"15px"}>Quantity:{quantity}</Text>
            </Flex> 
            <Text fontWeight={"bold"}>Order Date- {date[0]+date[1]}/{date[2]+date[3]}/{date[6]+date[7]}</Text>
          </Box>
        </Box>
      </Flex>
    );
  }
  


const MyOrder = () => {

  const {order}=useSelector((store)=>store.order)
  const {user}=useSelector((store)=>store.auth)
  const uid=user[0]?.uid
 const dispatch=useDispatch()

  useEffect(()=>{
  dispatch(getOrder(uid))
  },[uid])

  return (
    <Box mt="20px" w="100%" >
        <Center><Heading>My Orders</Heading></Center>
        <Grid  w={"100%"} templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(3,1fr)"}}>
            {order?.length && order.map((el)=>{
               return  <ProductAddToCart as="GridItem" key={el.id} {...el}></ProductAddToCart>
            })}
         

        </Grid>
    </Box>
  )
}

export default MyOrder