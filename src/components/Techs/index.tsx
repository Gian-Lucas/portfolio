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
      <Heading
        textAlign={["center", "center", "start"]}
        mb="14"
        data-aos="fade-up"
      >
        Tecnologias
      </Heading>

      <Wrap justify={["center", "center", "flex-start"]} spacing={["12", "20"]}>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="HTML5" icon={SiHtml5} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="CSS3" icon={SiCss3} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="JavaScript" icon={SiJavascript} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="TypeScript" icon={SiTypescript} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="ReactJS" icon={SiReact} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="NextJS" icon={SiNextdotjs} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="Chakra UI" icon={SiChakraui} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="Sass" icon={SiSass} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="styled-components" icon={SiStyledcomponents} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="Git" icon={SiGit} />
        </WrapItem>
        <WrapItem data-aos="flip-left" data-aos-duration="800">
          <TechIcon label="GitHub" icon={SiGithub} />
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
