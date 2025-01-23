import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Section from "./components/Section";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Resume from "./scenes/Resume";
import Navbar from "./scenes/Navbar";
import Projects from "./scenes/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width:1060px)"); // check minwith if > 1060 or <1060

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Section id="home" setSelectedPage={setSelectedPage}>
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing />
      </Section>

      <Section id="resume" setSelectedPage={setSelectedPage}>
        <Resume />
      </Section>

      <Section id="projects" setSelectedPage={setSelectedPage}>
        <Projects />
      </Section>

      <Section id="contact" setSelectedPage={setSelectedPage}>
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
