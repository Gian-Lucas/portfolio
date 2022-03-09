import { Button, Icon, useColorMode } from "@chakra-ui/react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <Icon as={MdDarkMode} />
      ) : (
        <Icon as={MdLightMode} />
      )}
    </Button>
  );
}
