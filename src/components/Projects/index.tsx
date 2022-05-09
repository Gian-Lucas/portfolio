import { Flex, Heading, Link, Button, Spinner } from "@chakra-ui/react";
import { ProjectCardList } from "./ProjectCardList";

import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { useEffect, useState } from "react";

interface Project {
  url: string;
  title: string;
  githubUrl: string;
  info: string;
}

export function Projects() {
  const [results, { state }] = useAllPrismicDocumentsByType("project");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (results !== undefined) {
      const projectsFormatted = results.map((project) => {
        const data = project.data;
        return {
          title: data.title[0].text,
          info: data.description[0].text,
          url: data.image.url,
          githubUrl: data.url.url,
        };
      });
      setProjects(projectsFormatted);
    }
  }, [results]);

  return (
    <Flex
      flexDir="column"
      id="projects"
      mx="auto"
      mt="20"
      px={["30", "50", "50"]}
      maxWidth="1080px"
    >
      <Heading
        mb="14"
        textAlign={["center", "center", "start"]}
        data-aos="fade-up"
      >
        Meus projetos
      </Heading>

      {state === "loading" ? (
        <Spinner mx="auto" />
      ) : (
        <ProjectCardList projects={projects} />
      )}

      <Link
        _hover={{ textDecoration: "none" }}
        data-aos="flip-up"
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
