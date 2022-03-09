import { Flex } from "@chakra-ui/react";
import { ToggleTheme } from "../ToogleTheme";

export function Header() {
  return (
    <Flex as="header">
      <ToggleTheme />
    </Flex>
  );
}
