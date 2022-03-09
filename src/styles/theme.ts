import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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
  styles: {
    global: {
      body: {
        bg: "white",
        color: "dark.normal",
      },
    },
  },
});
