"use client";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Certificates from "./components/certificates";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      
      <section id="skills">
        <Skills />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}
