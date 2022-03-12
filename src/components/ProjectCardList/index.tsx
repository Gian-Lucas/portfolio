import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  StackDivider,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { ProjectCard } from "../ProjectCard";

interface Project {
  url: string;
  title: string;
  githubUrl: string;
  info: string;
}

interface ProjectCardListProps {
  projects: Project[];
}

export function ProjectCardList({ projects }: ProjectCardListProps) {
  const { colorMode } = useColorMode();
  return (
    <Flex
      flexDir="column"
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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </VStack>

      <Link
        _hover={{ textDecoration: "none" }}
        isExternal
        href="https://github.com/Gian-Lucas?tab=repositories"
        w="fit-content"
        mx="auto"
        mt="10"
      >
        <Button
          bg="blue.400"
          color="gray.50"
          _hover={{
            bg: "blue.500",
          }}
        >
          Ver todos os projetos
        </Button>
      </Link>
    </Flex>
  );
}
