import { VStack, Text, HStack, useColorMode } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";

import { Link } from "./Link";

export function Footer() {
  const { colorMode } = useColorMode();
  return (
    <VStack
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      mt="10"
      py="10"
      id="footer"
      data-aos="fade-right"
    >
      <HStack spacing="8">
        <Link href="https://github.com/gian-lucas" icon={AiFillGithub} />
        <Link
          href="https://linkedin.com/in/gian-lucas-66299618b"
          icon={AiFillLinkedin}
        />
        <Link href="mailto:lgian584@gmail.com" icon={MdMail} />
        <Link href="https://instagram.com/gian.tsx" icon={AiFillInstagram} />
      </HStack>

      <Text>Gian Lucas ©2022. Todos os direitos reservados</Text>
    </VStack>
  );
}
