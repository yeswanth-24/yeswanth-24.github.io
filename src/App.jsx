import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Spotlight from "./components/Spotlight";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* ambient futuristic backdrop */}
      <div className="bg-fx" aria-hidden>
        <span className="nebula nebula-a" />
        <span className="nebula nebula-b" />
        <span className="nebula nebula-c" />
      </div>

      <Nav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Spotlight />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
