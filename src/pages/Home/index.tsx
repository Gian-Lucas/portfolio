import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  SiChakraui,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { ButtonToTop } from "../../components/ButtonToTop";

import { Footer } from "../../components/Footer";
import { ProjectCardList } from "../../components/ProjectCardList";

import { projects } from "../../projects.json";

export function Home() {
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
            Olá, me chamo Gian! Desenvolvedor Front-End Web
          </Heading>
          <Text mt={["3", "6", "10"]} textAlign={["center", "center", "start"]}>
            Opa! Tudo bem? Meu nome é Gian Lucas, tenho 17 anos e sou um
            Desenvolvedor Front-Ent Web. Atualmente estou focado em estudar a
            stack ReactJS + NextJS + Chakra UI + styled-components. Fiz o curso
            técnico em informática integrado ao ensino médio no IFPB e irei
            ingressar em Ciência da Computação na UEPB.
          </Text>

          <Link
            _hover={{ textDecoration: "none" }}
            isExternal
            href="mailto:lgian584@gmail.com"
            mt="10"
            mx={["auto", "auto", "0"]}
          >
            <Button
              w="fit-content"
              bg="blue.400"
              color="gray.50"
              _hover={{
                bg: "blue.500",
              }}
            >
              Entre em contato
            </Button>
          </Link>
        </Flex>

        <Image
          mx="auto"
          mb={["35", "50", "0"]}
          ml={["auto", "auto", "70"]}
          borderRadius="full"
          boxSize={["250", "300"]}
          src="https://avatars.githubusercontent.com/u/67169105?v=4"
          alt="Gian Lucas"
        />
      </Flex>

      <Flex
        id="tech"
        mx="auto"
        px={["30", "50", "50"]}
        mt={["50", "50", "100"]}
        maxWidth="1080px"
        flexDir="column"
      >
        <Heading textAlign={["center", "center", "start"]} mb="14">
          Tecnologias
        </Heading>
        <SimpleGrid mx="auto" columns={[2, 3, 4, 5]} spacingX={8} spacingY={12}>
          <Tooltip label="HTML5" fontSize="lg">
            <Box>
              <Icon
                as={SiHtml5}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="CSS3" fontSize="lg">
            <Box>
              <Icon
                as={SiCss3}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="JavaScript" fontSize="lg">
            <Box>
              <Icon
                as={SiJavascript}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="TypeScript" fontSize="lg">
            <Box>
              <Icon
                as={SiTypescript}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="ReactJS" fontSize="lg">
            <Box>
              <Icon
                as={SiReact}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="NextJS" fontSize="lg">
            <Box>
              <Icon
                as={SiNextdotjs}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="Chakra UI" fontSize="lg">
            <Box>
              <Icon
                as={SiChakraui}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="Sass" fontSize="lg">
            <Box>
              <Icon
                as={SiSass}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="styled-components" fontSize="lg">
            <Box>
              <Icon
                as={SiStyledcomponents}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="Git" fontSize="lg">
            <Box>
              <Icon
                as={SiGit}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
          <Tooltip label="GitHub" fontSize="lg">
            <Box>
              <Icon
                as={SiGithub}
                boxSize={["20", "24"]}
                transition="0.3s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              />
            </Box>
          </Tooltip>
        </SimpleGrid>
      </Flex>

      <ProjectCardList projects={projects} />

      <Footer />
      <ButtonToTop />
    </>
  );
}
