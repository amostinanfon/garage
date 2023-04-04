import { Box, Text, Divider, Center, Spacer, HStack, Image, Button} from '@chakra-ui/react';
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



const Navbar = () => {

const label = ['home', 'about', 'services', 'contact']


  return (
    <Box ml={10} mr={10}>
      <Box display={'flex'} flexDir='row'>
      <Box display={'flex'}>
          <Box m={5}>
            <HamburgerIcon w={8} h={5} color='white'/>
          </Box>
          <Box mt={5}>
            <Divider orientation='vertical' h={25} />
          </Box>
          <Text m={5} pr={3} color='#FFFFFF' fs>LOGIN</Text>
        </Box>   
        <Box display={{base:'none', md:'block'}} ml={5}>
          <Box color={'white'} display='flex' flexDir={'row'} mr={20} mt={5}>
          <Popover trigger='hover'>
            <PopoverTrigger>
              <Text mr={5} color={colors[3]}>HOME</Text>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow  bgColor='#0668BB'/>
              <PopoverHeader 
                bgColor={'whiteAlpha.500'} 
                color='#282C31' 
                textAlign={'center'}
                fontWeight={600}
                >
                  HOME
                </PopoverHeader>
              <PopoverBody bgColor={'whiteAlpha.500'} color='#373C43'>
              <List spacing={3} bgColor='white'>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB'bgColor='white' />
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
              </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>


          <Popover trigger='hover'>
            <PopoverTrigger>
              <Text mr={5}>ABOUT</Text>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow  bgColor='#0668BB'/>
              <PopoverHeader 
                bgColor={'whiteAlpha.500'} 
                color='#282C31' 
                textAlign={'center'}
                fontWeight={600}
                >
                  ABOUT US
                </PopoverHeader>
              <PopoverBody bgColor={'whiteAlpha.500'} color='#373C43'>
              <List spacing={3} bgColor='white'>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white' />
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB'bgColor='white' />
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
              </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>


          <Popover trigger='hover'>
            <PopoverTrigger>
              <Text mr={5}>SERVICES</Text>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow  bgColor='#0668BB'/>
              <PopoverHeader 
                bgColor={'whiteAlpha.500'} 
                color='#282C31' 
                textAlign={'center'}
                fontWeight={600}
                >
                  NOS SERVICES
                </PopoverHeader>
              <PopoverBody bgColor={'whiteAlpha.500'} color='#373C43'>
              <List spacing={3} bgColor='white'>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white' />
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB'bgColor='white' />
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
              </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>


          <Popover trigger='hover'>
            <PopoverTrigger>
              <Text mr={5}>CONTACT</Text>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow  bgColor='#0668BB'/>
              <PopoverHeader 
                bgColor={'whiteAlpha.500'} 
                color='#282C31' 
                textAlign={'center'}
                fontWeight={600}
                >
                  CONTACTEZ-NOUS
                </PopoverHeader>
              <PopoverBody bgColor={'whiteAlpha.500'} color='#373C43'>
              <List spacing={3} bgColor='white'>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white' />
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB'bgColor='white' />
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
                <ListItem bgColor='white'>
                  <ListIcon as={CheckIcon} color='#0668BB' bgColor='white'/>
                  <Text _hover={{color:'black'}} bgColor={'white'} _active={{fontSize:15.95}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Text>
                </ListItem>
              </List>
              </PopoverBody>
            </PopoverContent>
          </Popover>
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
