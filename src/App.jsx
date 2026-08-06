import About from "./components/About";
import Capabilities from "./components/Capabilities";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Principles from "./components/Principles";
import Projects from "./components/Projects";
import Proof from "./components/Proof";
import Skills from "./components/Skills";
import Spotlight from "./components/Spotlight";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-fx" aria-hidden>
        <span className="nebula nebula-a" />
        <span className="nebula nebula-b" />
        <span className="nebula nebula-c" />
      </div>

      <Nav />
      <main>
        <Hero />
        <About />
        <Principles />
        <CaseStudy />
        <Capabilities />
        <Spotlight />
        <Projects />
        <Proof />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
