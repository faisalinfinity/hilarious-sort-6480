import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Footer from '../components/Footer';
import CarouselDeals from '../components/CarouselDeals';
import Carousel1 from '../components/CarouselPoster';
import PopularDestination from '../components/PopularDestination';
import BikeCycling from '../components/BikeCycling';
import { Blue } from '../constants/theme';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Homepage() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')


  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Catch them now',
      text:"Celebrate 27 year's of  Pokemmon with toys, figueres & games.",
      button:"Shop Now",
      image:
        'https://i.postimg.cc/j2tjb1Dd/Screenshot-2023-02-24-102013.png',
    },
    {
      title: 'Set Your Walking style',
      text:
        "Create unique outfit with the perfect pair of sneakers.",
      button:"Shop Now",
      image:
        'https://i.postimg.cc/P5gTH7cs/Screenshot-2023-02-24-102128.png',
    },
    {
      title: 'Free yourself from stress',
      text:
        "Enjoy your favorite sport with the perfect allies.",
      button:"Shop Now",
      image:
        'https://i.postimg.cc/ZRTkKzxg/Screenshot-2023-02-24-102333.png',
    },
  ];

  return (
    <>
      {isLargerThan750 && <Box
    margin={"5px"}
      position={'relative'}
      height={'380px'}
      w="80%"
      m="auto"
      mt={"10px"}
     >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'380'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            
            backgroundImage={card.image}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="1000px" w="400px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                right="85%"
                top="16%"
                transform="translate(0, -50%)">
                <Heading color={'red.800'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text color={'red.800'} fontSize={{ base: 'md', lg: 'lg' }} >
                  {card.text}
                </Text>
               
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>    
    </Box>}
      <CarouselDeals />
      <Carousel1 />
      <PopularDestination />
      <BikeCycling />
      <hr />
      <Footer />
     </>
  );
}