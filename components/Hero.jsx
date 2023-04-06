import { calc } from '@chakra-ui/react';
import { Box , Text, Button, Divider, Flex, Center, Image} from '@chakra-ui/react';
import colors from '../colors/color';


const Hero = () => {
  return (
    <Box>
    <Flex mx={10} p={5} mt={[2,4, 6]} flexDir={['column','column','row']}>
      <Flex flex={1} flexDir='column' gap={5} color='white'>
        <Text 
          noOfLines={[2,2,2]}
          bgColor={'transparent'}
          w={['100%','100%','130%']}
          zIndex={999}
          fontSize={[24,30,40,80]}
          fontWeight={[700, 900]}
          lineHeight={1.0}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing     
        </Text>
        <Text w={'80%'} noOfLines={[2,2,2]} lineHeight={1.0}
>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Perferendis sunt animi, iam reiciendis quod! Veniam.
        </Text>
        <Center>
          <Button
              w={100}
              bg={colors[1]}
              _hover={{bg:'blue.500'}}
              _active={{bg:'blue.400'}}
          >
            Contact Us
          </Button>
        </Center>

         {/*i love this game */}
         <Flex display={['none','block']}>
         <Flex flexDir={'row'} h={'50'} gap={5} my={[32,16]}>
           <Box >
              <Divider w={50} orientation='vertical' />
           </Box>
           <Center>
           <Box  w={120} ml={'-12'} mr={4}>
             <Text 
              color={'white.900'} 
              textAlign='center' 
              p='5px'
              fontWeight={800}
              >
                320
              </Text>
            <Text 
              h={100} 
              // overflow={'scroll'}
              lineHeight={1.15} 
              color={'white.900'} 
              textAlign='center'
              >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Text>
          </Box>
        </Center>
          <Box>
            <Divider w={50} orientation='vertical'/>
          </Box>
          <Center>
          <Box  w={120} ml={'-12'} mr={4}>
            <Text 
              color={'white.900'} 
              textAlign='center' 
              p='5px'
              fontWeight={800}
              >
                5312
              </Text>
            <Text 
              h={100} 
              lineHeight={1.15} 
              color={'white.900'} 
              textAlign='center'
              >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Text>
          </Box>
          </Center>
          <Divider w={50} orientation='vertical'/>
        </Flex> 
         </Flex>
      </Flex>
      <Box flex={1} my={[10,0]}>
        <Image src='/img/photo5.jpg' rounded={5} w={[580,600,800]} h={[200,300,300,400]}/>
      </Box>
    </Flex>
    <Divider />
  </Box>
  )
}

export default Hero;