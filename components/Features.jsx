import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    MdSettingsInputComposite, 
    MdOutlineVideoSettings,
    MdHighlightAlt,
    MdWebhook,
    MdQueryStats
} from "react-icons/md"
  
  const Card = ({ heading, description, icon, href , bgColor}) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Features () {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Pourquoi nous faire confiance ???
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          offrir la réparation automobile de la plus haute qualité est 
          la façon dont nous forgeons des relations avec nos clients
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'ecoute'}
              icon={<Icon as={MdQueryStats} w={10} h={10} color='#4C5397'/>}
              description={
                'Offrir la réparation automobile de la plus haute qualité .' 
            }
              href={'#'}
            />
            <Card
              heading={'Rapidite'}
              icon={<Icon as={MdSettingsInputComposite} w={10} h={10} color='#4C5397'/>}
              description={
                'Offrir la réparation automobile de la plus haute qualité .' 
              }
              href={'#'}
            />
            <Card
              heading={'Proximite'}
              icon={<Icon as={MdOutlineVideoSettings} w={10} h={10} color='#4C5397'/>}
              description={
                'Offrir la réparation automobile de la plus haute qualité .'
              }
              href={'#'}
            />
            <Card
              heading={'disponibilite'}
              icon={<Icon as={MdHighlightAlt} w={10} h={10} color='#4C5397'/>}
              description={
                'Offrir la réparation automobile de la plus haute qualité .' 
              }
              href={'#'}
            />
            <Card
              heading={'proactivite'}
              icon={<Icon as={MdWebhook} w={10} h={10} color='#4C5397'/>}
              description={
                'Offrir la réparation automobile de la plus haute qualité est .' 
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }
  