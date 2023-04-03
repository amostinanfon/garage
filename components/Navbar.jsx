import { Box, Text, Divider, Center, Spacer, HStack, Image} from '@chakra-ui/react';
import { HamburgerIcon }  from '@chakra-ui/icons';




const Navbar = () => {
  return (
    <Box>
      <Box display={'flex'} flexDir='row'>
        <Box w={30} h={30} m='20px'>
          <Image src='/img/bolo.jpeg' alt='bolo'/>
        </Box>
        <Spacer />
        <Box display={{base:'none', md:'block'}}>
          <Box color={'white'} display='flex' flexDir={'row'} mr='40'>
            <Text m={5} pr={3} color='#FFFFFF'>Home</Text>
            <Text m={5} pr={3} color='#FFFFFF'>About</Text>
            <Text m={5} pr={3} color='#FFFFFF'>Services</Text>
            <Text m={5} pr={3} color='#FFFFFF'>Discount</Text>
          </Box>
        </Box>
        <Box display={'flex'}>
          <Text margin={5} color='#FFFFFF'>Login</Text>
          <Box mt={5}>
            <Divider orientation='vertical' h={25} />
          </Box>
          <Box m={5}>
            <HamburgerIcon w={8} h={8} color='white'/>
          </Box>
        </Box>   
    </Box>
   <Box
    ml={5}
    mr={5}
   >
    <Divider />
   </Box>
    </Box>
  )
}

export default Navbar;
