import style from "../Style/Admin.module.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Flex,
  Box,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React,{ useEffect, useState } from "react";
import axios from "axios";
import { getDataElectronic } from "../redux/products/productAction";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BASE_URL } from "../constants/apiConstants";
import AdminAddProduct from "../components/AdminAddProduct";
import AdminTableUser from "../components/AdminTableUser";




function Admin() {
  const [adminData, setAdminData] = useState([]);
  const [category, setCategory] = useState("fashion");
  const [id,setId]=useState(1)
  const [formData,setFormData]=useState({
    title:"",
    category:"",
    price:0
  })
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const handleOpen=(value)=>{
    onOpen()
    setId(value)

}
  console.log("id",id)
  const handleGetData = () => {
    axios
      .get(`${BASE_URL}/${category}`)
      .then((res) => {
        setAdminData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange=(e)=>{
    const {name,value,type}=e.target;
    const val=type=='number'? Number(value):value ;
    setFormData({...formData, [name]:val})

  }
  const handleSubmit=(e)=>{
    //console.log("id",id)
    e.preventDefault();
    //console.log('formData',formData)
    axios.patch(`${BASE_URL}/${category}/${id}`,{
        title:formData.title,
        category:formData.category,
        price:formData.price
    })
    .then((res)=>{
        handleGetData()
   })
   .catch((err)=>{
    console.log(err)
   })
    
    setFormData("")
    onClose()
  }
  
  const handleDelete=(value)=>{
    axios.delete(`${BASE_URL}/${category}/${value}`)
    .then((res)=>{
        handleGetData()
    })
    .catch((err)=>{
        console.log(err)
    })

  }

  useEffect(() => {
    handleGetData();
  }, [category]);

  const Star = (rating) => {
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
  };

  return (
    <div className={style.adminPanel}>
      <h1 className={style.heading}>Admin Panel</h1>
      <div>
        <Tabs defaultIndex={1}>
          <TabList>
            <Tab fontWeight={"bold"}>Dashboard</Tab>
            {/* <Tab fontWeight={"bold"}>All Product</Tab> */}
            <Tab fontWeight={"bold"}>Add Product</Tab>
            <Tab fontWeight={"bold"}>Users</Tab>
            <Tab fontWeight={"bold"}>Orders</Tab>
          </TabList>
          <TabPanels>
            {/* <TabPanel></TabPanel> */}
            <TabPanel>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={"10px"}
              >
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setCategory("electronic")}
                >
                  Electronic
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setCategory("fashion")}
                >
                  Fashion
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setCategory("jewellary")}
                >
                  Jewellary
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setCategory("toys")}
                >
                  Toys
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setCategory("home")}
                >
                  Home
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </Button>
                {/* <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => setCategory("cart")}
                >
                  Cart
                </Button> */}
              </Flex>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "20px",
                }}
              >
                {adminData.map((el) => (
                  <div key={el.id}>
                    <Card maxW="sm" bg={"blue.100"}>
                      <CardBody>
                        <Image
                          src={el.image}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          maxH={"130px"}
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md" noOfLines={2}>
                            {el.title}
                          </Heading>
                          <Flex
                            justifyContent={"space-between"}
                            alignItems={"center"}
                          >
                            <Text fontWeight={"bold"}>{el.category}</Text>
                            <Text fontWeight={"bold"}>{Star(el.rating)}</Text>
                          </Flex>
                          <Text color="blue.600" fontSize="2xl">
                            ${el.price}
                          </Text>
                        </Stack>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <ButtonGroup spacing="2">
                          <Button onClick={()=>handleOpen(el.id)}  variant="solid" colorScheme="blue">Update</Button>

                          <Modal
                            initialFocusRef={initialRef}
                            isOpen={isOpen}
                            onClose={onClose}
                          >
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>Update Product Data</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody pb={6}>
                                <FormControl>
                                  <FormLabel>Change Title</FormLabel>
                                  <Input
                                    type='text'
                                    ref={initialRef}
                                    placeholder="Title..."
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                  />
                                </FormControl>
                                <FormControl>
                                  <FormLabel>Change Category</FormLabel>
                                  <Select  name="category" value={formData.category} onChange={handleChange}>
                                    <option value="electronic">Electronic</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="jewellary">Jewellary</option>
                                    <option value="toys">Toys</option>
                                    <option value="home">Home</option>
                                    <option value="sports">Sports</option>
                                    <option value="cart">Cart</option>
                                  </Select>
                                  
                                </FormControl>
                                <FormControl mt={4}>
                                  <FormLabel>Change Price</FormLabel>
                                  <Input 
                                    type='number'
                                    placeholder="Price..." 
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    />
                                    
                                </FormControl>
                              </ModalBody>

                              <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                                  Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                          <Button variant="solid" colorScheme="red" onClick={()=>handleDelete(el.id)}>
                            Delete
                          </Button>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <AdminAddProduct/>
            </TabPanel>
            <TabPanel>
              <AdminTableUser/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
export default Admin;
