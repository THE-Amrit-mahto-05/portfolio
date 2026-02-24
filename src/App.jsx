import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Datasets from "./components/Datasets";
import Certifications from "./components/Certifications";
import Hackathons from "./components/Hackathons";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Projects />
        <Datasets />
        <Certifications />
        <Hackathons />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
