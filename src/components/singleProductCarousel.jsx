

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SingleCarousel.css";
import 'swiper/css/scrollbar';

// import required modules
import { Pagination, Navigation } from "swiper";
import { SingleProductData } from "./SingleProductData";
import { Box } from "@chakra-ui/react";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        className="mySwiper"  
        
      > 
      {SingleProductData.map((el)=>(
        <SwiperSlide>
            <div style={{padding:"20px",textAlign:"left",fontSize:"15px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <img style={{height:"200px"}} src={el.image} alt="name" />
              <Box  noOfLines={2}>{el.title}</Box>
              <p>New</p>
              <p>${el.price}</p>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
