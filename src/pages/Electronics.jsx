import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Img,
} from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,Text
   
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
const mainPageData=[
    {image:"https://i.ebayimg.com/thumbs/images/g/DiMAAOSwVaJhDBUC/s-l225.webp",title:"Top Electronic Deals"},
    {image:"https://i.ebayimg.com/thumbs/images/g/~JwAAOSwXhRdfDLx/s-l225.webp",title:"Cell Phones, Smart Watches & Accessories"},
    {image:"https://i.ebayimg.com/thumbs/images/g/XkkAAOSweExhcJOR/s-l225.webp",title:"Computers, Tablets & Network Hardware"},
    {image:"https://i.ebayimg.com/thumbs/images/g/crEAAOSw52JcpmnG/s-l225.webp",title:"Portable Audio & Headphones"},
    {image:"https://i.ebayimg.com/thumbs/images/g/C-QAAOSw10dhcJOt/s-l225.webp",title:""},
    {image:"https://i.ebayimg.com/thumbs/images/g/cFEAAOSwXFhhcJOW/s-l225.webp",title:""},
    {image:"",title:""},
    {image:"",title:""},
    {image:"",title:""},
    {image:"",title:""},
    {image:"",title:""},
]
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
          <BreadcrumbLink>Electronics</BreadcrumbLink>
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
      <div style={{display:'grid',gridTemplateColumns:"30% 68%" , gap:"5px", marginTop:"10px" }}>
        <div>
        <Accordion allowToggle>
  <AccordionItem m={3}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Cameras & Photos
        </Box>
        <AccordionIcon color={'blue'} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     </AccordionPanel>
  </AccordionItem>

  <AccordionItem m={3}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Cell Phones & Accessories
        </Box>
        <AccordionIcon color={'blue'} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem m={3}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Computers/Tablet
        </Box>
        <AccordionIcon  color={'blue'}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     </AccordionPanel>
  </AccordionItem>
  <AccordionItem m={3}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         SmartWatches
        </Box>
        <AccordionIcon color={'blue'} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     </AccordionPanel>
  </AccordionItem>
  <AccordionItem m={3}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Video Games & Console
        </Box>
        <AccordionIcon color={'blue'} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     </AccordionPanel>
  </AccordionItem>
  
</Accordion>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"19% 19% 19% 19% 19%",gap:5}}>
        {
            mainPageData.map((item)=>(
               
                   <div style={{display:"grid",gridTemplateRows:"78% 20%",width:"155px" , height:"200px"}}>
                      <div><Img src={item.image} alt={item.title}/></div>
                      <div><Text fontSize='sm'>{item.title}</Text></div>
                   </div>
               
            ))
        }

        </div>
      </div>
    </div>
  );
};

export default Electronics;
