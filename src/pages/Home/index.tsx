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
  useDisclosure,
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
import { TechIcon } from "../../components/TechIcon";

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
          <Text
            fontSize={["md", "lg", "lg", "xl"]}
            mt={["3", "6", "10"]}
            textAlign={["center", "center", "start"]}
          >
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
            w="fit-content"
          >
            <Button
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
          <TechIcon label="HTML5" icon={SiHtml5} />
          <TechIcon label="CSS3" icon={SiCss3} />
          <TechIcon label="JavaScript" icon={SiJavascript} />
          <TechIcon label="TypeScript" icon={SiTypescript} />
          <TechIcon label="ReactJS" icon={SiReact} />
          <TechIcon label="NextJS" icon={SiNextdotjs} />
          <TechIcon label="Chakra UI" icon={SiChakraui} />
          <TechIcon label="Sass" icon={SiSass} />
          <TechIcon label="styled-components" icon={SiStyledcomponents} />
          <TechIcon label="Git" icon={SiGit} />
          <TechIcon label="GitHub" icon={SiGithub} />
        </SimpleGrid>
      </Flex>

      <ProjectCardList projects={projects} />

      <Footer />
      <ButtonToTop />
    </>
  );
}
