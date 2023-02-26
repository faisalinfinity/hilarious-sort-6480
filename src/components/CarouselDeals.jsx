import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Button,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { AiFillDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Text, Card, CardBody, Image, Stack, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

// Settings for the slider

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function CarouselDeals() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);
  const navigate = useNavigate();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const handleClick = (el) => {
    navigate(el.link)
  };

  const data = [
    {
      id: 1,
      image: "https://i.ebayimg.com/images/g/nAIAAOSwsBtaDeZL/s-l225.webp",
      price: 8100,
      offer: "50% Off",
      link:"/electronic"
    },
    {
      id: 2,
      image: "https://i.ebayimg.com/images/g/6DgAAOSwew9jyh~p/s-l225.webp",
      price: 1600,
      offer: "50% Off",
      link:"/fashion"
    },
    {
      id: 3,
      image: "https://i.ebayimg.com/images/g/QS0AAOSwpUtgv9Pl/s-l225.webp",
      price: 960,
      offer: "50% Off",
      link:"/home"
    },
    {
      id: 4,
      image: "https://i.ebayimg.com/images/g/F0gAAOSwAmdjyiAV/s-l225.webp",
      price: 1300,
      offer: "50% Off",
      link:"/fashion"
    },
    {
      id: 5,
      image: "https://i.ebayimg.com/images/g/kx0AAOSwPpRienPW/s-l225.webp",
      price: 1100,
      offer: "50% Off",
      link:"/electronic"
    },
    {
      id: 6,
      image: "https://i.ebayimg.com/images/g/jtgAAOSws~ZjbN4n/s-l225.webp",
      price: 1500,
      offer: "50% Off",
      link:"/fashion"
    },
    {
      id: 7,
      image: "https://i.ebayimg.com/images/g/qagAAOSwc1NjGnDU/s-l225.webp",
      price: 10100,
      offer: "50% Off",
      link:"/electronic"
      

    },
    {
      id: 8,
      image: "https://i.ebayimg.com/images/g/gaAAAOSwLB1jikz6/s-l225.webp",
      price: 62000,
      offer: "50% Off",
      link:"/electronic"
    },
    {
      id: 9,
      image: "https://i.ebayimg.com/images/g/onkAAOSw2G5h4f2v/s-l225.webp",
      price: 6200,
      offer: "50% Off",
      link:"/electronic"
    },
    {
      id: 10,
      image: "https://i.ebayimg.com/images/g/DWYAAOSwJzxjGnII/s-l225.webp",
      price: 51000,
      offer: "50% Off",
      link:"/electronic"
    },
  ];
  return (
    <Box
      position={"relative"}
      height={"500px"}
      width={"90%"}
      overflow={"hidden"}
      margin={"auto"}
      mt={20}
    >
      <Flex>
        <Text fontWeight={700} fontSize={22} textAlign="left">
          Daily Deals |
        </Text>
        <Link to={"/electronic"}>
          <Text fontWeight={700} fontSize={22} ml={10}>
            See all <ArrowForwardIcon />{" "}
          </Text>
        </Link>
      </Flex>

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
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <Button backgroundColor={"blue.300"}>
          <AiFillCaretLeft color="black" />
        </Button>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(10%, -40%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <Button backgroundColor={"blue.300"}>
          <AiFillCaretRight color="black" />
        </Button>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((el, index) => (
          <Card  cursor="pointer" height="380px" ml={10} maxW="sm" _hover={{}}>
            <CardBody>
              <Image
                // ml="20px"
                id="hov"
                width="250px"
                height="200px"
                src={el.image}
                alt="Daily Deals"
                borderRadius="lg"
                onClick={()=>handleClick(el)}
              />
              <Stack spacing="4">
                <Text fontWeight="bold" fontSize="lg">
                  ₹{el.price}
                </Text>
                <Box mb="15px">
                  {Array(5)
                    .fill("")
                    .map((_, i) => {
                      let rating = Math.ceil(Math.random() * 3);

                      return (
                        <Icon
                          as={AiFillStar}
                          key={i}
                          color={i <= rating ? "gold" : "gray.300"}
                        />
                      );
                    })}
                </Box>
                <Box>
                  <Flex marginLeft="30px" textAlign="bottom">
                    <Text mr="5px">₹1.00/2</Text>
                    <AiFillDollarCircle
                      mr="5px"
                      mt="2px"
                      width="30px"
                      height="30px"
                      color="teal"
                    />
                    <Text ml="5px">{el.offer}</Text>
                  </Flex>
                </Box>
                <Text color="teal" mb="30px">
                  Free shipping with $99 orders
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
