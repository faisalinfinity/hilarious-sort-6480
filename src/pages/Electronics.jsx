import React from "react";
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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineRight,AiOutlineArrowRight } from "react-icons/ai";
const Category = [
  {
    image: "https://i.ebayimg.com/thumbs/images/g/DiMAAOSwVaJhDBUC/s-l225.webp",
    title: "Top Electronic Deals",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/~JwAAOSwXhRdfDLx/s-l225.webp",
    title: "Cell Phones, Smart Watches & Accessories",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/XkkAAOSweExhcJOR/s-l225.webp",
    title: "Computers, Tablets & Network Hardware",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/crEAAOSw52JcpmnG/s-l225.webp",
    title: "Portable Audio & Headphones",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/C-QAAOSw10dhcJOt/s-l225.webp",
    title: "Cameras & Photo",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/cFEAAOSwXFhhcJOW/s-l225.webp",
    title: "TV, Video & Home Audio Electronics",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/jx4AAOSw01tdgnC-/s-l225.webp",
    title: "Video Games & Consoles",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/9m0AAOSwNHVhcJO2/s-l225.webp",
    title: "Surveillance & Smart Home Devices",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/PUcAAOSwWANhcJSh/s-l225.webp",
    title: "Apple",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/UtUAAOSwI5dhcJT1/s-l225.webp",
    title: "Car Electronics & GPS",
  }
];
const Refurbished = [
  {
    image: "https://i.ebayimg.com/thumbs/images/g/4r8AAOSwit9hcJXk/s-l225.webp",
    title: "Laptops",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/RLUAAOSw3CZhcJY0/s-l225.webp",
    title: "Cell Phones",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/pfoAAOSwMlhhcJau/s-l225.webp",
    title: "Camera Drones",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/lgwAAOSwv-VhcJhv/s-l225.webp",
    title: "Portable Audio ",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/jloAAOSwP6phcJgc/s-l225.webp",
    title: "Gaming Stations",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/L1gAAOSwDsNhcJeS/s-l225.webp",
    title: "Monitors",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/LsAAAOSwDsNhcJdE/s-l225.webp",
    title: "Desktop Computers",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/4~sAAOSwveRhcJb7/s-l225.webp",
    title: "Surveillance & Smart Home Devices",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/es8AAOSwwWxhcJkH/s-l225.webp",
    title: "Shop All on Productify",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/UtUAAOSwI5dhcJT1/s-l225.webp",
    title: "Car Electronics & GPS",
  }
];

const Electronics = () => {
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
          <b> Electronics</b>
        </BreadcrumbItem>
      </Breadcrumb>
      {/* ------Image section------ */}
      <div style={{ height: "320px", marginTop: "15px" }}>
        <Img
          src="https://assets.dragonmart.ae//pictures/0103296_DragonMart_categorylisting_computer&electronics_1of3.jpeg"
          width={"100%"}
          height={"100%"}
        />
      </div>
      {/* ------Main body with two column and one column in small screen------ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 73%",
          gap: "5px",
          marginTop: "10px",
         
          
        }}
      >
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
        <Text fontSize="3xl" fontWeight={'bold'}>Shop By Category</Text>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "20% 20% 20% 20% 20%",
            gap: 5
          }}
        >
          {Category.map((item) => (
            <div
              style={{
                display: "grid",
                gridTemplateRows: "78% 20%",
                width: "160px",
                height: "210px",
              }}
            >
              <div>
                <Img src={item.image} alt={item.title} />
              </div>
              <div>
                <Text fontSize="sm">{item.title}</Text>
              </div>
            </div>
          ))}
         
          
        </div>
       
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
          {Refurbished.map((item) => (
            <div
              style={{
                display: "grid",
                gridTemplateRows: "78% 20%",
                width: "160px",
                height: "210px",
              }}
            >
              <div>
                <Img src={item.image} alt={item.title} />
              </div>
              <div>
                <Text fontSize="sm">{item.title}</Text>
              </div>
            </div>
          ))}
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
  );
};

export default Electronics;
