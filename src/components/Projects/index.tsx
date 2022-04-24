import { Flex, Heading, Link, Button } from "@chakra-ui/react";
import { ProjectCardList } from "./ProjectCardList";

import { projects } from "../../projects.json";

export function Projects() {
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

      <ProjectCardList projects={projects} />

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
