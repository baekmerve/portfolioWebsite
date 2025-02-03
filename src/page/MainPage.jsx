import Section from "@/components/Section";
import DotGroup from "@/scenes/DotGroup";
import Landing from "@/scenes/Landing";
import Projects from "@/scenes/Projects";
import Resume from "@/scenes/Resume";
import Contact from "@/scenes/Contact";
import React from "react";

const MainPage = ({ selectedPage, setSelectedPage, isDesktop }) => {
  return (
    <div>
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
    </div>
  );
};

export default MainPage;
