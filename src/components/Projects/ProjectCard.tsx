import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

interface Project {
  url: string;
  title: string;
  githubUrl: string;
  info: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { url, title, githubUrl, info } = project;
  return (
    <Flex
      flexDir={["column", "column", "row"]}
      data-aos="fade-right"
      data-aos-duration="600"
    >
      <Box mr={["0", "0", "5"]} mb={["2", "4", "0"]}>
        <Image
          maxWidth={["auto", "auto", "500"]}
          borderRadius="base"
          src={url}
          alt={title}
        />
      </Box>
      <Stack spacing={["3", "4", "5"]}>
        <Heading>{title}</Heading>
        <Link
          w="fit-content"
          _hover={{ textDecoration: "none" }}
          href={githubUrl}
          isExternal
        >
          <Tag
            transition="0.3s"
            variant="solid"
            bg="gray.700"
            w="fit-content"
            _hover={{ transform: "scale(1.1)" }}
          >
            Acessar repositório
          </Tag>
        </Link>
        <Text>{info}</Text>
      </Stack>
    </Flex>
  );
}
