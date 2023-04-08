import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from '@chakra-ui/react';

import { AiOutlineMenu } from "react-icons/ai";


const Hero = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <chakra.header>
      <Box
        w="full"
        h="container.sm"
        backgroundImage="/img/photo12.jpg"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", , "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              GARAGE{" "}
              <chakra.span color="blue.400" textDecor="underline">
                GROUPE TASSO
              </chakra.span>
            </Heading>
            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
            >
              COntactez-nous
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};




export default Hero ;