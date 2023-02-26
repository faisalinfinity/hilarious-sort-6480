import style from "../Style/SingleProduct.module.css"

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
    <div className={style.carouselParent}>
      <Swiper
        slidesPerView={3}
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
            <div className={style.carouselDiv} >
              <img style={{height:"200px"}} src={el.image} alt="name" />
              <Box  noOfLines={2}>{el.title}</Box>
              <p>New</p>
              <p>${el.price}</p>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
