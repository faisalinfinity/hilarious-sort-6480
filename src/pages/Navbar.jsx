import React, { useEffect, useState } from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Text,
    useBreakpointValue,
    Collapse,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Image,VStack, Input
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronRightIcon,ChevronDownIcon } from '@chakra-ui/icons';
  import logo from "../constants/logo.png";
  import { Link,useNavigate} from "react-router-dom"
  import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/cart/cartAction';
import { logoutAction } from '../redux/auth/authAction';
import { AiOutlineShoppingCart } from 'react-icons/ai';

  const Links = ['Dashboard', 'Projects', 'Team'];
  
  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );
  
  
   
  
const Navbar = () => {
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose ,onToggle} = useDisclosure();
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("");
    const [category, setCategory] = useState("Select Category");
    const {cart} = useSelector((store)=>store.cart)
    let userName = user[0]?.displayName;
  let image = user[0]?.photoURL;
  const dispatch = useDispatch();
  const handleClick = () =>{
    navigate("/cart")
  }
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMenu = (e) => {
    setCategory(e.target.innerText.toLowerCase());
  };
   useEffect(()=>{
    if(user[0]?.uid){
      dispatch(getCart(user[0].uid))
    }
    
   },[])
   const onSearch = () => {
    navigate(`/${category}?q=${searchValue}`);
  };
  return (
   
      <Box bg={useColorModeValue('gray.100', 'gray.900')}  px={4}>
         <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Link to="/">
            <Image src={logo} w="80px" ml="20px" margin={"auto"} />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
         <Flex justifyContent={"center"} alignItems={'center'} margin={'auto'}  display={{ base: 'none', md: 'inline-flex' }}>
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
            </Flex>
        
          </Flex>
          
          <Flex alignItems={'center'}>
          {/* <Button onClick={toggleColorMode}  margin="3px" width={"20px"} height={"20px"}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
               
              </Button> */}
               
              {!isLoggedIn ? (
            <Box display={"flex"} w="20%">
              <Link
              
              to="/signup"
            >     <Button
            
           
            fontSize={'sm'}
            fontWeight={'bold'}
            color={'white'}
            bg={'pink.400'}
          
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button></Link>
         
            </Box>
          ) : (
            <Menu  key={"Sign In"}>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                 <Avatar src={image} />
              </MenuButton>
              <MenuList>
                <MenuItem>Hi! {userName}</MenuItem>
                <MenuItem><Link to="/order">My Order</Link></MenuItem>
                <MenuDivider />
                <MenuItem> <Button
                      onClick={() => {
                        dispatch(logoutAction());
                      }}
                    >
                      Sign Out
                    </Button></MenuItem>
              </MenuList>
            </Menu> 
        

                  
          )}
         
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
          <AiOutlineShoppingCart size={"30px"} margin={"5px"}/><span style={{fontSize:"15px",fontWeight:"bold"}} >{cart?.length===0?"0":cart.length}</span>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
         <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      </Box>

     
    
  )
}
const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} display={'flex'} justifyContent={'center'} alignItems={"center"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                <Text fontWeight={'bold'} fontSize={'18px'}>{navItem.label}</Text>  
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
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
     
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
            <Link to={href}> {label}</Link> 
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <ChevronRightIcon/>
          </Flex>
        </Stack>
      
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
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
      
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
          <Link to={href}>  {label}</Link>
          </Text>
          {children && (
            <ChevronDownIcon  
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}   
            w={6}
            h={6}/>
            // <Icon
            //   as={ChevronDownIcon}
            //   transition={'all .25s ease-in-out'}
            //   transform={isOpen ? 'rotate(180deg)' : ''}
            //   w={6}
            //   h={6}
            // />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  
  const NAV_ITEMS= [
    {
        label: 'Categories',
        children: [
          {
            label: 'Electronics',
             href: '/electronic',
          },
          {
            label: 'Fashion',
             href: '/fashion',
          },
          {
            label: 'Toys',
             href: '/toys',
          },
          {
            label: 'Home',
             href: '/home',
          },
          {
            label: 'Jewellary',
             href: '/jewellary',
          },
          {
            label: 'Sports',
             href: '/sports',
          }
        ],
    },
]

export default Navbar
