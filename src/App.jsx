import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Domains from "./components/Domains";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}