import React from 'react'
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
import { AiOutlineRight,AiOutlineArrowRight } from "react-icons/ai";
const Smartphone = () => {
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
   
    </div>
  )
}

export default Smartphone
