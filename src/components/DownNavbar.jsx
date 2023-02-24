import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    HStack,
    PopoverArrow,
    PopoverBody,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  import { NavLink } from "react-router-dom";
  import { BsThreeDotsVertical } from "react-icons/bs";
  
  
  export default function DownNav() {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.700", "white")}
          minH={"30px"}
          width={"full"}
          borderBottom={1}
          columnGap={{base:0,sm:0,md:5,lg:8}}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "flex",lg:"none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", sm:'center',  md: "start" }}>

            <Flex
              display={{ base: "none", md: "none",lg:"flex" }}
              ml={10}
              alignItems={"center"}
            >
              <DesktopNav />
            </Flex>
          </Flex>

  
             {/* RightMenuThreeDot */}
        <Flex justifyContent="center" mt={0} display={{base:'flex',md:'none',lg:'none'}} >
          <Popover placement="bottom" isLazy>
            <PopoverTrigger>
              <Button bg={'white'} _hover={{bg:'pink.100',color:'#BB1679'}} >
              <IconButton
                aria-label="Right menu"
                icon={<BsThreeDotsVertical />}
                variant="solid"
                w="fit-content"
                bg={'white'}
                fontWeight={'bold'}
              />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="fit-content" _focus={{ boxShadow: 'md' }}>
              <PopoverArrow />
              <PopoverBody>
                <Stack>
            <HStack spacing={-8} alignItems={'flex-start'} justifyContent={'start'} >
            </HStack>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        </Flex>
          <Collapse in={isOpen} animateOpacity  >
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
    return (
      <Stack direction={"row"} spacing={6} ml={15}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={{md:'xs',lg:"sm"}}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                    borderBottom: "3px solid #BB1679",
                  }}
                >
                  <NavLink to='/product' >
                  {navItem.label}
                  </NavLink>
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"md"}
                  w={"auto"}
                >
                  <Flex
                    direction={"row"}
                    width={"auto"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Flex>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack
          direction={"column"}
          align={"flex-start"}
          border={"0px solid pink"}
          spacing={1}
        >
          <Flex
            border={"0px solid black"}
            direction={"column"}
            align={"flex-start"}
          >
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.700" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Flex direction={"column"} align={"flex-start"} gap={"5px"}>
              {subLabel.map((el, i) => (
                <Text fontSize={"sm"} key={i}>
                  {el}
                </Text>
              ))}
            </Flex>
          </Flex>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        paddingX={5}
        display={{ lg: "none" }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}  mt={{base:'4rem',sm:'5rem',md:20,lg:20}}>
        <Flex
          py={1}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          zIndex={9999}
          _hover={{
            textDecoration: "none",
    
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
            fontSize={{base:12,sm:13,md:18,lg:18}}
          >
            <NavLink  to="/product">
            {label}
            </NavLink>
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={{base:3,sm:4,md:6,lg:6}}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
        label: "Home",
        
    },
    {
        label: "Saved",
       
    },
    {
      label: "Electronics",
      children: [
        {
          label: "Most Popular Categories",
          subLabel: [
            "Smartphones and accessories",
            "Video games and consoles",
            "Computers and tablets",
            "Cameras and photos",
            "Camera drones",
            "Refurbished",
            "Smart home",
          ],
          href: "#",
        },
        {
          label: "More Categories",
          subLabel: [
            "Apple",
            "Samsung",
            "Portable audio and headphones",
            "Emerging brands",
            "Smart watches",
            "Deals",
            "Sell on eBay",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "Motors",
      children: [
        {
          label: "Car",
          subLabel: [
            "Auto and truck parts",
            "Tools and supplies",         
            "Turbo chargers",
            "Clothing and merchandise",
            "Shock absorbers",
            "Electronic and GPS",
            "Air intake",
            "Vintage pieces",
          ],
          href: "#",
        },
        {
          label: "Motorcycle and more",
          subLabel: [
            "Motorcycle parts",
            "Body and frame",
            "Engines and parts",
            "Accessories",
            "Exhausts and systems",
            "Rims",
            "Deals",
            "Sell on eBay",
            "Jumpsuits"
          ],
          href: "#",
        },
        
      ],
    },
    {
      label: "Fashion",
      children: [
        {
          label: "Most popular category",
          subLabel: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Sweaters",
            "Jackets",
            "Blazzers and Coats",
            "Suits",
            "Rain Jackets",
          ],
          href: "#",
        },
        {
          label: "More categories",
          subLabel: [
            "Shampoo",
            "Conditioners",
            "Hair Treatments",
            "Hair Masks",
            "Hair Oils",
            "Hair Sprays",
            "Hair Styling",
            "Hair Thinning & Loss",
          ],
          href: "#",
        },
        {
          label: "Footwear",
          subLabel: [
            "Flats",
            "Casual Shoes",
            "Heels",
            "Boots",
            "Sports Shoes & Floaters",
            "Sports and Active Wear",
          ],
          href: "#",
        },
        {
          label: "Toys",
          subLabel: ["Flat Irons", "Hair Dryers", "Rollers & Curling Tongs"],
          href: "#",
        },
        {
          label: "Infants",
          subLabel: [" Removal Devices", " Removal Products", " Beauty Products"],
          href: "#",
        },
      ],
    },
    {
        label: "Sports",
        children: [
          {
            label: "Most popular categories",
            subLabel: [
                "Cycling",
                "Fitness, running and yoga",
                "Fitness Tech",
                "Fishing",
                "Camping",
                "Scooters",
                "Team Sports"
            ],
            href: "#",
          },
          {
            label: "More Categories",
            subLabel: [
              "Watersports",
              "Wintersports",
              "Box and MMA",
              "Swimming",
              "GPS & Running Watches",
              "Garmin",
              "Deals",
              "Sell on eBay"
            ],
            href: "#",
          },
          {
            label: "Deoderants",
            subLabel: [
              "Perfume",
              "EAU de Toilette",
              "Body Spray",
              "For Her",
              "For Him",
            ],
            href: "#",
          },
          {
            label: "Ethnic",
            subLabel: [
              "Scented Candles",
              "Diffusers",
              "Aromatherapy",
              "Pillow Mists",
              "Room Sprays",
            ],
            href: "#",
          },
    
          {
            label: "Upcoming Fashion",
            subLabel: ["In Shirts", "In Pants", "Casual", "Watches", "Footwear"],
            href: "#",
          },
        ],
      },
    {
      label: "Home & Living",
      children: [
        {
          label: "Ben Linen & Furnishing",
          subLabel: [
            "New In",
            "Clean Makeup",
            "5 Rated Products",
            "Gifts & Sets",
            "Brushes & Applicators",
            "Makeup Palettes",
            "Nails",
          ],
          href: "#",
        },
        {
          label: "Flooring",
          subLabel: [
            "Eye Liners",
            "Lash & Brow Enhancers",
            "Eye Shadows",
            "Mascaras",
            "Brow Pencils",
          ],
          href: "#",
        },
        {
          label: "Bath",
          subLabel: [
            "BB && CC Cream",
            "Blushers",
            "Bronzers",
            "Color Correctors",
            "Concealers",
            "Contour",
            "Face Powders",
            "Foundations",
            "Highlighters",
          ],
          href: "#",
        },
        {
          label: "Lamps and Lighting",
          subLabel: [
            "stastics",
            "Lamps Balms",
            "Lamp Glosses",
            " Liners",
            " Plumpers",
            "Liquid Lamps",
          ],
          href: "#",
        },
        {
          label: "Home Decor",
          subLabel: [
            "Accessories",
            "Pre-Tan Preparation",
            "Body Tanners",
            "Post Tanning",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "Beauty",
      children: [
        {
          label: "Makeup",
          subLabel: [
            "View All Bath & Body",
            "New In",
            "Clean Bath & Body",
            "5 Rated Products",
            "Gifts & Sets",
            "Travel Sizes",
            "At Home Spa",
            "Decorants",
            "Oral Care",
          ],
          href: "#",
        },
        {
          label: "Skincare,Bath & Body",
          subLabel: [
            "Baths Oils/Soak",
            "Bath Salts",
            "Body Washes",
            "Cleansing bars",
            "Exfoliators",
          ],
          href: "#",
        },
        {
          label: "Baby Care",
          subLabel: [
            "Accessories",
            "Pre-Tan Preparation",
            "Body Tanners",
            "Post Tanning",
          ],
          href: "#",
        },
        {
          label: "Moisturizers",
          subLabel: ["Balms", "Butters", "Creams", "Lotions", "Oils"],
          href: "#",
        },
        {
          label: "Haircare",
          subLabel: [
            "Bust",
            "Cellulite",
            "Dry Skin",
            "Hair Removal",
            "Hands & Foot Care",
            "Hans Soap Senitizers & Creams",
            "Legs",
            "Simming & Sculpting",
            "Strecth Marks",
            "Sunscreen",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "Studio",
      children: [
        {
          label: "Galary",
          subLabel: ["View All Fragrance", "New In", "5 Rated Products"],
          href: "#",
        },
        {
          label: "Top Brands",
          subLabel: [
            "NEOM Organics",
            "Glasshouse Fragrances",
            "KORRES",
            "NEST Fragrance",
            "Molton Brown",
          ],
          href: "#",
        },
        {
          label: "Deoderants",
          subLabel: [
            "Perfume",
            "EAU de Toilette",
            "Body Spray",
            "For Her",
            "For Him",
          ],
          href: "#",
        },
        {
          label: "Ethnic",
          subLabel: [
            "Scented Candles",
            "Diffusers",
            "Aromatherapy",
            "Pillow Mists",
            "Room Sprays",
          ],
          href: "#",
        },
  
        {
          label: "Upcoming Fashion",
          subLabel: ["In Shirts", "In Pants", "Casual", "Watches", "Footwear"],
          href: "#",
        },
      ],
    },
    {
        label: "Deals",
        children: [
          {
            label: "Galary",
            subLabel: ["View All Fragrance", "New In", "5 Rated Products"],
            href: "#",
          },
          {
            label: "Top Brands",
            subLabel: [
              "NEOM Organics",
              "Glasshouse Fragrances",
              "KORRES",
              "NEST Fragrance",
              "Molton Brown",
            ],
            href: "#",
          },
          {
            label: "Deoderants",
            subLabel: [
              "Perfume",
              "EAU de Toilette",
              "Body Spray",
              "For Her",
              "For Him",
            ],
            href: "#",
          },
          {
            label: "Ethnic",
            subLabel: [
              "Scented Candles",
              "Diffusers",
              "Aromatherapy",
              "Pillow Mists",
              "Room Sprays",
            ],
            href: "#",
          },
    
          {
            label: "Upcoming Fashion",
            subLabel: ["In Shirts", "In Pants", "Casual", "Watches", "Footwear"],
            href: "#",
          },
        ],
      },
    {
        label: "Sell",
        children: [
          {
            label: "How??",
            subLabel: [
                "How to create a listing",
                "Join our growth program",
                "Seller center",
                "Seller updates",
                "Seller customer service",
                "eBay managed payments",
            ],
            href: "#",
          },
          {
            label: "Learn to...",
            subLabel: [
              "Learn to sell",
              "eBay stores",
              "eBay fees",
              "Selling limits",
            ],
            href: "#",
          },
          {
            label: "Deoderants",
            subLabel: [
              "Perfume",
              "EAU de Toilette",
              "Body Spray",
              "For Her",
              "For Him",
            ],
            href: "#",
          },
          {
            label: "Ethnic",
            subLabel: [
              "Scented Candles",
              "Diffusers",
              "Aromatherapy",
              "Pillow Mists",
              "Room Sprays",
            ],
            href: "#",
          },
        ],
      },
  ];