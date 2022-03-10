import {
  Box,
  Heading,
  StackDivider,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { ProjectCard } from "../ProjectCard";

export function ProjectCardList() {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="projects"
      mx="auto"
      mt="20"
      px={["30", "50", "50"]}
      maxWidth="1080px"
    >
      <Heading mb="14" textAlign={["center", "center", "start"]}>
        Meus projetos
      </Heading>
      <VStack
        spacing="10"
        divider={
          <StackDivider
            borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
          />
        }
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </VStack>
    </Box>
  );
}
