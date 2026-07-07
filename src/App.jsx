import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Strengths from "./components/strengths/Strengths.jsx";
import Contact from "./components/contact/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="mx-auto my-10 h-px w-full max-w-330 white/10" />
        <Skills />
        <div className="mx-auto my-10 h-px w-full max-w-330 bg-white/10" />
        <Experience />
        <Projects />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
