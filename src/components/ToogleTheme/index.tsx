import { Button, Icon, useColorMode } from "@chakra-ui/react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode, toggleColorMode);

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
