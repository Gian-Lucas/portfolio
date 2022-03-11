import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { MenuHeaderProvider } from "./contexts/MenuHeaderContext";
import { Home } from "./pages/Home";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MenuHeaderProvider>
        <Header />
        <Home />
      </MenuHeaderProvider>
    </ChakraProvider>
  );
}

export default App;
