import {
  Flex,
  IconButton,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { MenuLink } from "../MenuLink";
import { ToggleTheme } from "../ToogleTheme";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  if (isMobile) {
    return (
      <Flex
        id="header"
        as="header"
        justifyContent="flex-end"
        alignItems="center"
        p="2"
      >
        <IconButton
          aria-label="Search database"
          icon={<FiMenu />}
          onClick={onOpen}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <VStack spacing="4" mt="14">
                <MenuLink href="#home" title="Home" mr="0" />
                <MenuLink href="#tech" title="Tecnologias" />
                <MenuLink href="#projects" title="Projetos" />
                <MenuLink href="#contact" title="Contato" />
                <ToggleTheme />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    );
  }

  return (
    <Flex
      id="header"
      as="header"
      justifyContent="flex-end"
      alignItems="center"
      p="2"
    >
      <MenuLink href="#home" title="Home" />
      <MenuLink href="#tech" title="Tecnologias" />
      <MenuLink href="#projects" title="Projetos" />
      <MenuLink href="#contact" title="Contato" />

      <ToggleTheme />
    </Flex>
  );
}
