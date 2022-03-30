import { StackDivider, useColorMode, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";

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
  );
}
