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
    <VStack mb="10" mt="20" id="contact">
      <HStack spacing="8">
        <Link href="https://github.com/gian-lucas" isExternal>
          <Icon boxSize="10" as={AiFillGithub} />
        </Link>
        <Link href="https://linkedin.com/in/gian-lucas-66299618b" isExternal>
          <Icon boxSize="10" as={AiFillLinkedin} />
        </Link>
        <Link href="https://instagram.com/gian_lcss" isExternal>
          <Icon boxSize="10" as={AiFillInstagram} />
        </Link>
      </HStack>
      <Stack
        direction={["column", "column", "row"]}
        divider={
          <StackDivider
            borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
          />
        }
      >
        <Text>Gian Lucas ©2022. Todos os direitos reservados</Text>
        <Link mx="auto" href="#header" _hover={{ color: "blue.500" }}>
          Voltar ao topo
        </Link>
      </Stack>
    </VStack>
  );
}
