import { 
  Box, 
  Text, 
  Divider, 
  Center, 
  Spacer, 
  HStack, 
  Image, 
  Button,
  Link
} from '@chakra-ui/react';
import { HamburgerIcon,MdCheckCircle ,MdSettings, CheckIcon }  from '@chakra-ui/icons';
import colors from '../colors/color';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

import NextLink from 'next/link'



const Navbar = () => {

const label = ['home', 'about', 'services', 'contact']


  return (
    <Box mr={10} ml={10}>
      <Box display={'flex'} flexDir='row'>
      <Box display={'flex'}>
          <Box m={5}>
            <HamburgerIcon color='white'/>
          </Box>
          <Box mt={5}>
            <Divider orientation='vertical' h={25} />
          </Box>
          <Text m={5} pr={10} color='#FFFFFF'>LOGIN</Text>
        </Box>   
        <Box display={{base:'none', md:'block'}} ml={5}>
          <Box color={'white'} display='flex' flexDir={'row'} mr={20} mt={5}>
          
          
        </Box>
      </Box>
      <Spacer />
      <Box m='20px'>
        <Image src='/img/bolo.jpeg' alt='bolo' borderRadius='full' boxSize={30}/>
      </Box>
    </Box>
    <Box ml={5} mr={5} mt={0}>
      <Divider  />
    </Box>
    </Box>
  )
}

export default Navbar;
