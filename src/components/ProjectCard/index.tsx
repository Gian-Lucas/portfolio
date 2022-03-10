import { Flex, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";

export function ProjectCard() {
  return (
    <Flex flexDir={["column", "column", "row"]}>
      <Image
        mr={["0", "0", "5"]}
        mb={["2", "4", "0"]}
        borderRadius="base"
        src="https://i.ytimg.com/vi/nUGZvfx4PuU/mqdefault.jpg"
        alt="Gian Lucas"
      />
      <Stack spacing={["3", "4", "5"]}>
        <Heading>Título do projeto</Heading>
        <Tag variant="solid" bg="gray.700" w="fit-content">
          2022
        </Tag>
        <Text>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      </Stack>
    </Flex>
  );
}
