import { ChakraProvider } from "@chakra-ui/react";

import { About } from "./components/About";
import { ButtonToTop } from "./components/ButtonToTop";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";

import { MenuHeaderProvider } from "./contexts/MenuHeaderContext";

import { theme } from "./styles/theme";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <MenuHeaderProvider>
        <Header />
        <About />
        <Techs />
        <Projects />
        <Footer />
        <ButtonToTop />
      </MenuHeaderProvider>
    </ChakraProvider>
  );
}

export default App;
