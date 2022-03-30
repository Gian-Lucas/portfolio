import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiSass,
  SiStyledcomponents,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TechIcon } from "./TechIcon";

export function Techs() {
  return (
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

      <Wrap justify={["center", "center", "flex-start"]} spacing={["12", "20"]}>
        <WrapItem>
          <TechIcon label="HTML5" icon={SiHtml5} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="CSS3" icon={SiCss3} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="JavaScript" icon={SiJavascript} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="TypeScript" icon={SiTypescript} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="ReactJS" icon={SiReact} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="NextJS" icon={SiNextdotjs} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="Chakra UI" icon={SiChakraui} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="Sass" icon={SiSass} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="styled-components" icon={SiStyledcomponents} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="Git" icon={SiGit} />
        </WrapItem>
        <WrapItem>
          <TechIcon label="GitHub" icon={SiGithub} />
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
