import { Flex, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";

export function ProjectCard() {
  return (
    <Flex>
      <Image
        mr="5"
        borderRadius="base"
        boxSize={["150", "200"]}
        src="https://avatars.githubusercontent.com/u/67169105?v=4"
        alt="Gian Lucas"
      />
      <Stack spacing="5">
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
