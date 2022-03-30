import {
  Flex,
  IconButton,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useMenuHeader } from "../../contexts/MenuHeaderContext";

import { MenuLink } from "./MenuLink";
import { ToggleTheme } from "./ToggleTheme";

export function Header() {
  const { isOpen, onOpen, onClose } = useMenuHeader();
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

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          returnFocusOnClose={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <VStack spacing="4" mt="14">
                <MenuLink href="#home" title="Home" mr="0" />
                <MenuLink href="#tech" title="Tecnologias" />
                <MenuLink href="#projects" title="Projetos" />
                {/* <MenuLink href="#contact" title="Contato" /> */}
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
      fontSize="17"
      id="header"
      as="header"
      justifyContent="flex-end"
      alignItems="center"
      p="2"
    >
      <MenuLink href="#home" title="Sobre mim" />
      <MenuLink href="#tech" title="Tecnologias" />
      <MenuLink href="#projects" title="Projetos" />
      {/* <MenuLink href="#contact" title="Contato" /> */}

      <ToggleTheme />
    </Flex>
  );
}
