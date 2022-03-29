import {
  VStack,
  Text,
  Icon,
  Link,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";

export function Footer() {
  const { colorMode } = useColorMode();
  return (
    <VStack
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      mt="10"
      py="10"
      id="footer"
    >
      <HStack spacing="8">
        <Link href="https://github.com/gian-lucas" isExternal>
          <Icon
            boxSize="10"
            as={AiFillGithub}
            transition="0.5s"
            _hover={{
              transform: "scale(1.4) rotate(360deg)",
            }}
          />
        </Link>
        <Link href="https://linkedin.com/in/gian-lucas-66299618b" isExternal>
          <Icon
            transition="0.5s"
            _hover={{
              transform: "scale(1.4) rotate(360deg)",
            }}
            boxSize="10"
            as={AiFillLinkedin}
          />
        </Link>
        <Link href="mailto:lgian584@gmail.com" isExternal>
          <Icon
            transition="0.5s"
            _hover={{
              transform: "scale(1.4) rotate(360deg)",
            }}
            boxSize="10"
            as={MdMail}
          />
        </Link>
        <Link href="https://instagram.com/gian_lcss" isExternal>
          <Icon
            transition="0.5s"
            _hover={{
              transform: "scale(1.4) rotate(360deg)",
            }}
            boxSize="10"
            as={AiFillInstagram}
          />
        </Link>
      </HStack>

      <Text>Gian Lucas ©2022. Todos os direitos reservados</Text>
    </VStack>
  );
}
