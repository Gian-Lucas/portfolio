import { ApolloProvider } from "@apollo/client";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { apolloClient } from "./services/apollo";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
