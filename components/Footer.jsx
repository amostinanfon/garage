import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { ReactNode } from 'react';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'blue.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Produits</ListHeader>
            <Link href={'#'}>Aperçu</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Options</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('blue.300', 'blue.800')}
                ml={2}
                cursor='pointer'
                color={'white'}>
                Nouveautés
              </Tag>
            </Stack>
            <Link href={'#'}>Reductions</Link>
            <Link href={'#'}>Prix</Link>
            <Link href={'#'}>Mis en Service</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Entreprise</ListHeader>
            <Link href={'#'}>Qui sommes-nous ???</Link>
            <Link href={'#'}>Informations</Link>
            <Link href={'#'}>KBD</Link>
            <Link href={'#'}>Contactez-nous</Link>
            <Link href={'#'}>Nos partenaire</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Conditions d'utilisation</Link>
            <Link href={'#'}>Lois et Conditions</Link>
            <Link href={'#'}>Statut</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Suivez-nous</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Image src='/img/bolo.jpeg' width={50} height={50}/>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Made By Amos TINA NFON. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}



