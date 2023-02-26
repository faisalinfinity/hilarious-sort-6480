import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Image,
  Img,
  Select,
  Table,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
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
} from "@chakra-ui/react";
import { Spinner, Text } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineRight, AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {  getDataSports } from "../redux/products/productAction";
import {FaFilter} from 'react-icons/fa'
import { Checkbox, CheckboxGroup, Stack, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import "./allproduct.css"
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1}
      </Box>
    </Box>
  );
}
function Star({ rating }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

const Sports = () => {
  const { products, loading } = useSelector((store) => store.product);
  const [searchParams,setSearchParam]=useSearchParams();
  const [categoryfilter,setCategoryFilter]=useState([])
  const[startfilter,setStarFilter]=useState([])
  const location = useLocation();
 const [sortValue,setSortValue]=useState("")
 const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  //const [grid, setGrid] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataSports());
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get("q");
    const category = searchParams.get("category");
    if (searchValue !== "") {
      // console.log(searchValue);
      dispatch(getDataSports(searchValue));
    }
  }, [location]);
  const handleChange=(e)=>{
   setCategoryFilter(e);
  }
  const handleChangestar=(e)=>{
    setStarFilter(e);
   }
  useEffect(()=>{
    let params={}
    if(categoryfilter.length||sortValue.length||startfilter.length){
      params.category=categoryfilter
      params.rating=startfilter
      params.sort=sortValue
     
    }
    setSearchParam(params)
  },[categoryfilter,startfilter,sortValue])

 useEffect(()=>{
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("q");
  if(products?.length===0||location){
    const getProductParam={
      params:{
        category:searchParams.getAll('category'),
        rating:searchParams.getAll("rating"),
        _sort:"price",
        _order:searchParams.getAll('sort')[0]
      }
    }
    dispatch(getDataSports(searchValue,getProductParam))
  }
  
 },[location.search])
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
      
        <BreadcrumbItem isCurrentPage>
          <b> Sports </b>
        </BreadcrumbItem>
      </Breadcrumb>
    
<div style={{display:"flex",justifyContent:"right"}}>
<Select placeholder='Sort By'width={"150px"} onChange={(e)=>setSortValue(e.target.value)} value={sortValue}>
  <option value='asc'>Low to high</option>
  <option value='desc'>High to low</option>
  
</Select>
</div>
<div className="mobileview">
     
      
      <FaFilter className="filter" size={"20px"}  onClick={onOpen}/>
     
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Filter By</DrawerHeader><DrawerCloseButton/>
          <DrawerBody>
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
          >
            Category
          </Heading>

          <CheckboxGroup colorScheme={"green"}
           onChange={handleChange}
           value={categoryfilter}
          >
            <Stack direction={"column"}>
            <Checkbox value={"skates"} colorScheme="green">
              Skates
              </Checkbox>
            <Checkbox value={"tennis_ball"} colorScheme="green">
              Tennis Ball
              </Checkbox>
             
              <Checkbox value={"golf_ball"} colorScheme="green">
              Golf Ball
              </Checkbox>
            
           
              <Checkbox value={"skateboard"} colorScheme="green">
              Skateboard
              </Checkbox>
          
              <Checkbox value={"tennis_racquet"} colorScheme="green">
              Tennis Racquet
              </Checkbox>
            </Stack>
          </CheckboxGroup>
         
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
          >
            Rating
          </Heading>

          <CheckboxGroup colorScheme={"green"}
           onChange={handleChangestar}
           value={startfilter}
          >
            <Stack direction={"column"}>
              <Checkbox value={"5"} colorScheme="green">
                <Star rating={5} />
              </Checkbox>
              <Checkbox value={"4"} colorScheme="green">
                <Star rating={4} />
              </Checkbox>
              <Checkbox value={"3"} colorScheme="green">
                <Star rating={3} />
              </Checkbox>
              <Checkbox value={"2"} colorScheme="green">
                <Star rating={2} />
              </Checkbox>
              <Checkbox value={"1"} colorScheme="green">
                <Star rating={1} />
              </Checkbox>
            </Stack>
          </CheckboxGroup>

          </DrawerBody>
        </DrawerContent>
      </Drawer>  
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 73%",
          gap: "5px",
          marginTop: "10px",
        }}
      >
        {/* ------Left Side------ */}
        <div className="leftside">
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
          >
            Category
          </Heading>

          <CheckboxGroup colorScheme={"green"}
           onChange={handleChange}
           value={categoryfilter}
          >
            <Stack direction={"column"}>
            <Checkbox value={"skates"} colorScheme="green">
              Skates
              </Checkbox>
            <Checkbox value={"tennis_ball"} colorScheme="green">
              Tennis Ball
              </Checkbox>
             
              <Checkbox value={"golf_ball"} colorScheme="green">
              Golf Ball
              </Checkbox>
            
           
              <Checkbox value={"skateboard"} colorScheme="green">
              Skateboard
              </Checkbox>
          
              <Checkbox value={"tennis_racquet"} colorScheme="green">
              Tennis Racquet
              </Checkbox>
            </Stack>
          </CheckboxGroup>
         
          <Heading
            size={"sm"}
            fontWeight={"bold"}
            marginBottom={"5px"}
            marginTop={"5px"}
          >
            Rating
          </Heading>

          <CheckboxGroup colorScheme={"green"}
           onChange={handleChangestar}
           value={startfilter}
          >
            <Stack direction={"column"}>
              <Checkbox value={"5"} colorScheme="green">
                <Star rating={5} />
              </Checkbox>
              <Checkbox value={"4"} colorScheme="green">
                <Star rating={4} />
              </Checkbox>
              <Checkbox value={"3"} colorScheme="green">
                <Star rating={3} />
              </Checkbox>
              <Checkbox value={"2"} colorScheme="green">
                <Star rating={2} />
              </Checkbox>
              <Checkbox value={"1"} colorScheme="green">
                <Star rating={1} />
              </Checkbox>
            </Stack>
          </CheckboxGroup>

          
        </div>
        {/* ------Rigth Side------ */}
        
        <div>
       
          {loading ? (
            <Box  style={{width:"100%",marginTop:"30px",display:"flex",justifyContent:"center"}}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              style={{display:"flex",justifyContent:"center"}} /></Box>
          ) : (
            <Box
            display={"grid"}
            gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}}
            gap="10px"
           
            
            >
              {products?.map((item) => (
                <div>
                <Flex
                w={"fit-content"}
                margin="auto"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link to={`/sports/${item.id}`}>
                    {" "}
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
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
                       m="auto"
                       width={{base:"150px",md:"150px",lg:"250px"}}
                       height={{base:"150px",md:"150px",lg:"220px"}}
                       src={item.image}
                       alt={`Picture of ${item.title}`}
                       roundedTop="lg"
                      />

                      <Box p="6">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent={"space-between"}
                        >
                          {data.isNew && (
                            <Badge
                              rounded="full"
                              px="2"
                              fontSize="0.8em"
                              colorScheme="red"
                            >
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
                        <Flex
                          mt="1"
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Text fontSize="sm" fontWeight="semibold">
                            {item.title}
                          </Text>
                        </Flex>

                        <Flex
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Rating
                            rating={item.rating}
                            numReviews={item.reviews}
                          />
                          {"  "}
                        </Flex>
                        <Box fontSize="2xl">
                          <Box as="span" color={"gray.600"} fontSize="2xl">
                            ₹
                          </Box>
                          {(item.price ).toFixed(2)}
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Flex>
                </div>
              ))}
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sports;