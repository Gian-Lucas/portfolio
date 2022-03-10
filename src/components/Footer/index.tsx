import { VStack, Text, Icon, Link, HStack } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return (
    <VStack mb="10" mt="20">
      <HStack spacing="8">
        <Link href="https://github.com/gian-lucas" target="_blank">
          <Icon boxSize="10" as={AiFillGithub} />
        </Link>
        <Link
          href="https://linkedin.com/in/gian-lucas-66299618b"
          target="_blank"
        >
          <Icon boxSize="10" as={AiFillLinkedin} />
        </Link>
        <Link href="https://instagram.com/gian_lcss" target="_blank">
          <Icon boxSize="10" as={AiFillInstagram} />
        </Link>
      </HStack>
      <Text>Gian Lucas ©2020 Todos os direitos reservados</Text>
    </VStack>
  );
}
