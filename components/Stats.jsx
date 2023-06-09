import * as React from 'react';
import { Text, SimpleGrid, Box, Image, Flex, Stack } from '@chakra-ui/react';


const statData = [
  {
    id: 1,
    label: 'Clients',
    score: '550'
  },
  {
    id: 2,
    label: 'Projets',
    score: '421'
  },
  {
    id: 3,
    label: 'Note',
    score: '9/10'
  }
];

const Stats = () => {
  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image alt="Cover image" objectFit="cover" src="/img/photo16.jpg" />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Flex direction="column">
          <Text fontWeight="extrabold" fontSize="x-large" mb={2}>
            <Box as="span" display="inline-block" position="relative">
              Nous avons la confiance de nos clients
              <Box as="span" display="block" position="absolute" bg="blue.600" w="100%" h="1px" />
            </Box>
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consecte adipiscing elit. Vestibulum eros ex, mollis eget
            urna eu, convallis interdum ligula. Aenean posuere quam quam, id ultrices nisi vehicula
            et.
          </Text>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={1} mt={12} mb={4}>
            {statData.map((data) => (
              <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
                <Text fontWeight="extrabold" fontSize="xx-large">
                  {data.score}
                </Text>
                <Text fontSize="sm">{data.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Stats;
