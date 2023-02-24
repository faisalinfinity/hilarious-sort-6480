import {ArrowForwardIcon} from "@chakra-ui/icons"

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function BikeCycling() {
    return (
      <Stack minH={'350'} mt={30} mb={30} direction={{ base: 'column', md: 'row' }}>
        <Flex p={2} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading color={"green.900"} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                Bikes & Cycling Equipment
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'green.500'}>
            Save on bicycle
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                border='1px solid green'
                color={'black'}
                _hover={{
                  bg: 'green',
                  color:"white"
                }}>
                 Shop now <ArrowForwardIcon />
              </Button>

            </Stack>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image
            alt={'Login Image'}
            // objectFit={'cover'}
            src={
              'https://i.ebayimg.com/images/g/DhYAAOSwH99j7e1j/s-l960.webp'
            }
          />
        </Flex>
      </Stack>
    );
  }