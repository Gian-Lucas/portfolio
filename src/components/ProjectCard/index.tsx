import { Box, Flex, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";

import pokedex from "../../images/pokedex.png";

export function ProjectCard() {
  return (
    <Flex flexDir={["column", "column", "row"]}>
      <Box mr={["0", "0", "5"]} mb={["2", "4", "0"]}>
        <Image borderRadius="base" src={pokedex} alt="Pokedex" />
      </Box>
      <Stack spacing={["3", "4", "5"]}>
        <Heading>Pokedex</Heading>
        <Tag variant="solid" bg="gray.700" w="fit-content">
          2022
        </Tag>
        <Text>
          A Pokedex é uma enciclopédia virtual portátil de alta tecnologia que
          os treinadores Pokémon transportam para registra todas as espécies
          diferentes de Pokémon que são encontradas durante a sua viagem como
          treinadores.
        </Text>
      </Stack>
    </Flex>
  );
}
