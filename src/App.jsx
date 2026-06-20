import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),_transparent_18%)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
