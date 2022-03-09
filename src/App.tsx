import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Home />
    </ChakraProvider>
  );
}

export default App;
