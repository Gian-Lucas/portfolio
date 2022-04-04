import { Flex, Heading, Link, Button, Text, Image } from "@chakra-ui/react";
import Typist from "react-typist";

export function About() {
  return (
    <Flex
      id="about"
      maxWidth="1080px"
      justifyContent="space-between"
      flexWrap={["wrap-reverse", "wrap-reverse", "nowrap"]}
      mx="auto"
      px={["30", "50", "50"]}
      mt={["50", "50", "100"]}
    >
      <Flex flexDir="column">
        <Heading size="2xl" textAlign={["center", "center", "start"]}>
          <Typist
            cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 500,
            }}
          >
            Olá, me chamo Gian! Desenvolvedor Front-End Web
          </Typist>
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
  );
}
