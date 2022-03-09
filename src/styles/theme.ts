import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    dark: {
      normal: "#21243D",
    },
    light: {
      normal: "#8695A4",
    },
    orange: {
      normal: "#FF6464",
    },
    blue: {
      normal: "#00A8CC",
    },
  },
  fonts: {
    heading: "Heebo",
    body: "Heebo",
  },
});
