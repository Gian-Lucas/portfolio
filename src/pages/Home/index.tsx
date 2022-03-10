import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { ProjectCard } from "../../components/ProjectCard";

export function Home() {
  // const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        id="home"
        maxWidth="1080px"
        justifyContent="space-between"
        flexWrap={["wrap-reverse", "wrap-reverse", "nowrap"]}
        mx="auto"
        px={["30", "50", "50"]}
        mt={["50", "50", "100"]}
      >
        <Flex flexDir="column">
          <Heading size="2xl" textAlign={["center", "center", "start"]}>
            Hi, I am John, Creative Technologist
          </Heading>
          <Text mt={["3", "6", "10"]} textAlign={["center", "center", "start"]}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
          <Button
            w="fit-content"
            mt="10"
            mx={["auto", "auto", "0"]}
            bg="red.400"
            color="gray.50"
            _hover={{
              bg: "red.500",
            }}
          >
            Download Resume
          </Button>
        </Flex>

        <Image
          mx="auto"
          mb={["35", "50", "0"]}
          ml={["auto", "auto", "70"]}
          borderRadius="full"
          boxSize={["200", "250"]}
          src="https://avatars.githubusercontent.com/u/67169105?v=4"
          alt="Gian Lucas"
        />
      </Flex>

      <VStack
        id="projects"
        spacing="10"
        mx="auto"
        mt="20"
        px={["30", "50", "50"]}
        maxWidth="1080px"
      >
        <Heading textAlign={["center", "center", "start"]}>
          Meus projetos
        </Heading>
        <ProjectCard />
        <Divider />
        <ProjectCard />
        <Divider />
        <ProjectCard />
      </VStack>
    </>
  );
}
