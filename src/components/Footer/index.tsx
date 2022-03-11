import {
  VStack,
  Text,
  Icon,
  Link,
  HStack,
  StackDivider,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  const { colorMode } = useColorMode();
  return (
    <VStack
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      mt="10"
      py="10"
      id="contact"
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
        <Link
          href="https://linkedin.com/in/gian-lucas-66299618b"
          isExternal
          transition="0.5s"
          _hover={{
            transform: "scale(1.4) rotate(360deg)",
          }}
        >
          <Icon boxSize="10" as={AiFillLinkedin} />
        </Link>
        <Link
          href="https://instagram.com/gian_lcss"
          isExternal
          transition="0.5s"
          _hover={{
            transform: "scale(1.4) rotate(360deg)",
          }}
        >
          <Icon boxSize="10" as={AiFillInstagram} />
        </Link>
      </HStack>

      <Text>Gian Lucas ©2022. Todos os direitos reservados</Text>
    </VStack>
  );
}
