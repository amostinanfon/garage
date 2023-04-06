import { calc } from '@chakra-ui/react';
import { Box , Text, Button, Divider, Flex, Center, Image} from '@chakra-ui/react';
import colors from '../colors/color';


const Hero = () => {
  return (
    <Box>
    <Flex mx={10} p={5} mt={[2,4, 6]} flexDir={['column-reverse','column-reverse','row']}>
      <Flex flex={1} flexDir='column' gap={5} color='white' bgColor={'transparent'}>
        <Text 
          noOfLines={[2,2,2]}
          bgColor={'transparent'}
          w={['100%','100%','130%']}
          lineHeight={1.0}
          zIndex={999}
          fontSize={[24,30,40,70]}
          fontWeight={[700, 900]}
          pb={5}
          overflow='scroll'
          flex={1}
        >
           GROUPE TASSO dépannage véhicule  
        </Text>
        <Text w={'80%'} noOfLines={[2,2,2]} lineHeight={1.0} bgColor={'transparent'}>
        offrir la réparation automobile de la plus haute qualité est la façon 
        dont nous forgeons des relations avec nos clients
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
         <Flex>
         <Flex flexDir={'row'} h={'50'} gap={5} my={[16]}>
           <Box >
              <Divider w={50} orientation='vertical' />
           </Box>
           <Center>
           <Box  w={120} ml={['-20','-16','-12']} mr={[-6,-2,4]}>
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
              Techniciens expérimentés          
          </Text>
          </Box>
        </Center>
          <Box>
            <Divider w={50} orientation='vertical'/>
          </Box>
          <Center>
          <Box  w={120} ml={[-20,-16,-12]} mr={[-6,-2,4]}>
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
             Projets déjà réalisés 
            </Text>
          </Box>
          </Center>
          <Divider w={50} orientation='vertical'/>
        </Flex> 
         </Flex>
      </Flex>
      <Box flex={1} mb={5}>
        <Image src='/img/photo5.jpg' rounded={5} w={[580,600,800]} h={[200,300,300,400]}/>
      </Box>
    </Flex>
    <Divider />
  </Box>
  )
}

export default Hero;