import { About } from "../../components/About";
import { ButtonToTop } from "../../components/ButtonToTop";

import { Footer } from "../../components/Footer";
import { ProjectCardList } from "../../components/ProjectCardList";
import { Techs } from "../../components/Techs";

import { projects } from "../../projects.json";

export function Home() {
  return (
    <>
      <About />

      <Techs />

      <ProjectCardList projects={projects} />

      <Footer />

      <ButtonToTop />
    </>
  );
}
