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
  useBreakpointValue,
  useDisclosure,
  VStack,
  Avatar,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  BellIcon
} from '@chakra-ui/icons';

import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/auth/authAction';
import { useEffect } from 'react';
import { cartLoading, getCart } from '../redux/cart/cartAction';
import logo from "../constants/logo.png";

export default function SubNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate()
const {cart} = useSelector((store)=>store.cart)
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let userName = user[0]?.displayName;
  let image = user[0]?.photoURL;

  const handleClick = () =>{
    navigate("/cart")
  }

   useEffect(()=>{
    if(user[0]?.uid){
      dispatch(getCart(user[0].uid))
    }
    
   },[])
  
  return (
    <Box>
        
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        
        height='80px'
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
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} ml='30px'>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')} >
     
          </Text>
          {!isLoggedIn ? (
            <Box display={"flex"} w="20%">
             <Link
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                to={"/signup"}
              >
                 <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
              </Link>
            </Box>
          ) : (
            <Box key={"Sign In"}>
              <Popover size={"sm"} trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    fontSize={"10px"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                  <Text fontWeight={'bold'}> Hi! {userName}</Text>  
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
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={3}
          mr='50px'
          >
          {/* <Button
            variant={'link'}
            display={{ base: 'none', md: 'inline-flex' }}
            href={'#'}>
            Sell
          </Button> */}
          {/* <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            variant={'link'}
            color={'black'}
            href={'#'}
           >
            Watchlist <ChevronDownIcon />
          </Button> */}
        </Stack>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'space-evenly'}
          direction={'row'}
          spacing={2}
          mr='40px'
          >
          {/* <Button
            as={'a'}
            fontSize={'26px'}
            variant={'link'}
            href={'#'}>
           <BellIcon />
          </Button> */}
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
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
     
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
             <Text fontWeight={'bold'}>{navItem.label}</Text>   
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
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={'bold'}>
            <Link to={`${href}`}> {label}</Link>
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
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
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
        as={Link}
       
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
        fontWeight={'bold'}
          color={useColorModeValue('gray.600', 'gray.200')}
          >
         {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
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


const NAV_ITEMS = [
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
      },
    ],
  },
  
  // {
  //   label: 'Help & Contact',
  //   children: [
  //     {
  //       label: 'Job Board',
  //       subLabel: 'Find your dream design job',
  //       href: '#',
  //     },
  //     {
  //       label: 'Freelance Projects',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //   ],
  // }
];