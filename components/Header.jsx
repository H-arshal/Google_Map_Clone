import { Flex, InputGroup, InputRightElement, Menu, MenuButton, MenuIcon, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { Autocomplete, Rating } from '@material-ui/lab';
import React from 'react';
import {BiChevronDown, BiCloud, BiCloudLightning, BiCloudUpload, BiHotel, BiMapAlt, BiRestaurant, BiSearch,BiStar} from 'react-icons/bi';
import { Input } from '@chakra-ui/react';

const Header = ({setType,setRatings,setCoordinates}) => 
{
  return (
    <Flex 
    position={"absolute"}
    top={0} 
    left={0}
    width={"auto"}
    px={4}
    py={2}
    zIndex={101}
    >
    <Flex>
      {/* <Autocomplete> */}
        <InputGroup width={"32.3vw"} shadow="lg">
          <InputRightElement
          pointerEvents={'none'}
          children={<BiSearch color="gray" fontSize={20}/>}
          />  
          <Input
          type={'text'} 
          variant='filled' 
          placeholder='Google Maps Search...' 
          fontSize={18} 
          bg={'white'}
          fontFamily={"sans-serif"}
          color={{bg:'gray.700'}}
          _hover={{bg:'whiteAlpha.800'}}
          _focus={{bg:'whiteAlpha.800'}}
          border={0}
          _placeholder={{color:'gray.700'}}
          />
        </InputGroup>
      {/* </Autocomplete> */}
      {/*Rating*/}
      <Flex
      px={4}
      alignItems={'center'}
      justifyContent={'center'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          px={4}
          py={2}
          bg={'white'}
          rounded={'full'}
          ml={4}
          shadow="lg"
          cursor={"pointer"}
          _hover={{bg: 'gray.100'}}
          transition={'ease-in-out'}
          transitionDuration={'0.3s'}
      >
        <Menu>
          <BiStar fontSize={25}/>
          <MenuButton mx={2}transition='all 0.2s'borderRadius={'md'}>
            <Text ml={3} fontSize={16} fontWeight={500}> Choose rating</Text>
          </MenuButton>

          <MenuList>
            <MenuItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            onClick={()=>setRatings("")}
            >
              <Text fontSize={18} fontWeight={400} color={'gray.700'}>All Rating</Text>
            </MenuItem>
            <MenuItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            onClick={()=>setRatings(2)}
            >
              <Text fontSize={20} fontWeight={500} color={'orange.500'}>2.0</Text>
              <Rating size="small" value={2} readOnly/>
            </MenuItem>
            <MenuItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            onClick={()=>setRatings(3)}
            >
              <Text fontSize={20} fontWeight={500} color={'orange.500'}>3.0</Text>
              <Rating size="small" value={3} readOnly/>
            </MenuItem>
            <MenuItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            onClick={()=>setRatings(4)}
            >
              <Text fontSize={20} fontWeight={500} color={'orange.500'}>4.0</Text>
              <Rating size="small" value={4} readOnly/>
            </MenuItem>
            <MenuItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            onClick={()=>setRatings(5)}
            >
              <Text fontSize={20} fontWeight={500} color={'orange.500'}>5.0</Text>
              <Rating size="small" value={5} readOnly/>
            </MenuItem>
          </MenuList>
          <BiChevronDown fontSize={25}></BiChevronDown>
        </Menu>
        </Flex>
        <Flex
        alignItems={'center'}
        justifyContent={'center'}
        px={4}
        py={2}
        bg={'white'}
        rounded={'full'}
        ml={4}
        shadow="lg"
        cursor={"pointer"}
        _hover={{bg: 'gray.100'}}
        transition={'ease-in-out'}
        transitionDuration={'0.3s'}
        onClick={()=>setType('restaurants')}
        >
          <BiRestaurant fontSize={20}/>
          <Text ml={3} fontSize={16} fontWeight={500}>Restaurant</Text>
        </Flex>
        {/* {Hotels} */}
        <Flex
        alignItems={'center'}
        justifyContent={'center'}
        px={4}
        py={2}
        bg={'white'}
        rounded={'full'}
        ml={4}
        shadow="lg"
        cursor={"pointer"}
        _hover={{bg: 'gray.100'}}
        transition={'ease-in-out'}
        transitionDuration={'0.3s'}
        onClick={()=>setType('hotels')}
        >
          <BiHotel fontSize={20}/>
          <Text ml={3} fontSize={16} fontWeight={500}>Hotels</Text>
        </Flex>
        {/* {Attractions} */}
        <Flex
        alignItems={'center'}
        justifyContent={'center'}
        px={4}
        py={2}
        bg={'white'}
        rounded={'full'}
        ml={4}
        shadow="lg"
        cursor={"pointer"}
        _hover={{bg: 'gray.100'}}
        transition={'ease-in-out'}
        transitionDuration={'0.3s'}
        onClick={()=>setType('attractions')}
        >
          <BiMapAlt fontSize={20}/>
          <Text ml={3} fontSize={16} fontWeight={500}>Attractions</Text>
        </Flex>
        {/* {Weather} */}
        <Flex
        alignItems={'center'}
        justifyContent={'center'}
        px={4}
        py={2}
        bg={'white'}
        rounded={'full'}
        ml={4}
        shadow="lg"
        cursor={"pointer"}
        _hover={{bg: 'gray.100'}}
        transition={'ease-in-out'}
        transitionDuration={'0.3s'}
        onClick={()=>setType('weather')}
        >
          <BiCloud fontSize={20}/>
        </Flex>
      </Flex>
    </Flex>
    </Flex>
  );
};
export default Header