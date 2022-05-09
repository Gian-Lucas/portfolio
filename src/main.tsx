import { ColorModeScript } from "@chakra-ui/react";
import { PrismicProvider } from "@prismicio/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { clientPrismic } from "./services/prismic";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={clientPrismic}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
