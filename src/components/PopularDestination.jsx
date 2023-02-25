import { Card, Container, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'
import {ArrowForwardIcon} from "@chakra-ui/icons"
import { Link } from 'react-router-dom'

export const PopularDestination = () => {
    const navigate = useNavigate()

    const handleClick = (el) => {
        navigate(el.link)
    }
    const data=[
        {
            image:"https://i.ebayimg.com/thumbs/images/g/~74AAOSwWB5brPWl/s-l225.webp",
            id:1,
            title:"Jewellary & Watches",
            link:"/jewellary"
        },
        {
            image:"https://i.ebayimg.com/thumbs/images/g/bJ8AAOSwGsJb0koa/s-l225.webp",
            id:2,
            title:"Beauty",
            link:"/home"
        },
        {
            image:"https://i.ebayimg.com/thumbs/images/g/ijQAAOSwusdcPilu/s-l225.webp",
            id:3,
            title:"Computers & Tablets",
            link:"/electronic"
        },
        {
            image:"https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDOH-BABY-BABYOH-B18538443CB7C17/1615539609878_11.jpg",
            id:4,
            title:"Toys",
            link:"/toys"
        },
        {
            image:"https://i.ebayimg.com/thumbs/images/g/mq8AAOSwwMdde763/s-l225.webp",
            id:5,
            title:"Cellphones & Accessories",
            link:"/electronic"
        },
        {
            image:"https://i.ebayimg.com/thumbs/images/g/BNMAAOSw8JhjEo4n/s-l225.webp",
            id:6,
            title:"Home",
            link:"/home"
        },
        {
            image:"https://i.ebayimg.com/thumbs/images/g/KtsAAOSwEkhZypwK/s-l225.webp",
            id:7,
            title:"Shoes",
            link:"/fashion"
        }
    ] 
  return (
    <>
    <Container maxW="92%" margin={"auto"} marginTop="50px">
        <Flex>
            <Text fontWeight={700} fontSize={22} textAlign="left">Popular Destination |</Text>
            <Link to={"/electronic"}>
                <Text fontWeight={700} fontSize={22} ml={10}>See all <ArrowForwardIcon />  </Text>
            </Link>
        </Flex>
      </Container>
   
      <Container maxW="92%" margin="auto" marginTop="10px" >
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={5}>
          {data?.map((el)=>
          <Card key={el.id}
          maxH={"280px"}
          cursor={"pointer"}
          maxW={"300px"}
          p={2}
          borderRadius={50}
          onClick={()=>handleClick(el)}
          _hover={{boxShadow:'5px 5px 20px grey'}}>
               <Image  src={el.image} maxW="200px" maxH={"300px"}  borderRadius="50%"/>
               <Text fontSize={"15px"} textAlign="center" margin={"20px"}>{el.title}</Text>
          </Card>
          ) }
        </SimpleGrid>
      </Container>
    </>
  )
}

export default PopularDestination