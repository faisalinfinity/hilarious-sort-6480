import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Input,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  VStack,
  useBreakpointValue,
  Avatar
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import SubNavbar from "./SubNavbar";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import logo from "../constants/logo.png";
import DownNav from "./DownNavbar";
import { useEffect, useState } from "react";
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/cart/cartAction";
import { logoutAction } from '../redux/auth/authAction';
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [searchparams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {cart} = useSelector((store)=>store.cart)
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  let userName = user[0]?.displayName;
  let image = user[0]?.photoURL;
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMenu = (e) => {
    setCategory(e.target.innerText.toLowerCase());
  };
  const handleClick = () =>{
    navigate("/cart")
  }

   useEffect(()=>{
    if(user[0]?.uid){
      dispatch(getCart(user[0].uid))
    }
    
   },[])
  
  const onSearch = () => {
    navigate(`/${category}?q=${searchValue}`);
  };

return (
  <Box>
      <Box className="mobile">
       <Link to={"/"}>
            <Image src={logo} w="80px" ml="20px" margin={"auto"} />
          </Link>
          
      <SubNavbar />
      </Box>
    <Box  className="desktop">
      <Flex 
    
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
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
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to={"/"}>
            <Image src={logo} w="140px" ml="20px" />
          </Link>

          <Flex display={{ base: "none", md: "flex" }}>
           <DesktopNav /> 
        </Flex>
          <Flex alignItems="center">
            <Input
              value={searchValue}
              onChange={handleSearch}
              placeholder="Search here anything..."
              w="500px"
              ml="30px"
              border="2px solid black"
              height="44px"
              margin={"3px"}
            />
            <Menu>
              <MenuButton as={Button} border="2px solid black" height="44px">
                {category} <ChevronDownIcon />
              </MenuButton>
              <MenuList
                spacing={3}
                borderTop={"1px solid gray"}
                h={"185px"}
                overflowY={"scroll"}
              >
                <MenuItem onClick={handleMenu}>Electronic</MenuItem>
                <MenuItem onClick={handleMenu}>Fashion</MenuItem>
                <MenuItem onClick={handleMenu}>Toys</MenuItem>
                <MenuItem onClick={handleMenu}>Home</MenuItem>
                <MenuItem onClick={handleMenu}>Jewellary</MenuItem>
                <MenuItem onClick={handleMenu}>Sports</MenuItem>
              </MenuList>
            </Menu>
            <Button
              onClick={onSearch}
              bg="blue.500"
              color="white"
              width="120px"
              height="43px"
               margin={"3px"}
            >
              Search
            </Button>
          
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')} >
     
          </Text>
          {!isLoggedIn ? (
            <Box display={"flex"} w="20%" margin={"3px"}>
             <Link
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                to={"/signup"}
              >
               <Button bg="blue.700"  height="20px"  width="80px" color="white">Register</Button>
              </Link>
            </Box>
          ) : (
            <Box key={"Sign In"}  margin={"3px"}>
              <Popover size={"sm"} trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    fontSize={"10px"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                  <Text fontWeight={'bold'}> 
                  Hi! {userName}</Text>  
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <VStack>
                    <Avatar src={image} />
                    <Text>{userName}</Text>
                    <Button
                      onClick={() => {
                        dispatch(logoutAction());
                      }}
                    >
                      Sign Out
                    </Button>
                  </VStack>
                </PopoverContent>
              </Popover>
            </Box>
          )}
             <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'26px'}
            fontWeight={400}            
            variant={'link'}
            _hover={{ bg:"green.200"}}
            onClick={handleClick}
            >
            <AiOutlineShoppingCart /><span style={{fontSize:"15px"}} >{cart?.length===0?"Cart is Empty":cart.length}</span>
          </Button>
          </Flex>
        </Flex>
      </Flex>
     
        <Collapse in={isOpen} animateOpacity>
        <MobileNav />
        </Collapse>
        <DownNav /> 
        </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                <ChevronDownIcon />
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
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
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
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
      p={4}
      display={{ md: "none" }}
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
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        {/* <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text> */}
        {/* {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )} */}
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label} <ChevronDownIcon />
              </Link>
            ))}
        </Stack>
      </Collapse> */}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Shop By Category",
    children: [
      {
        label: "Collectible & art",
        subLabel: "Collectibles",
        href: "#",
      },
      {
        label: "Electronics",
        subLabel: "Computer & tablets",
        href: "#",
      },
      {
        label: "Fashion",
        subLabel: "Men & women",
        href: "#",
      },
      {
        label: "Home & Garden",
        subLabel: "Home Improvement",
        href: "#",
      },
      {
        label: "Auto parts & accessories",
        subLabel: "Radar & Laser detector",
        href: "#",
      },
      {
        label: "Musical Instrument and gear",
        subLabel: "Pro Audio equipment",
        href: "#",
      },
    ],
  },
];
