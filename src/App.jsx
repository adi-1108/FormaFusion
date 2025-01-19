import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ReactLenis, useLenis } from "lenis/react";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ReactLenis root>
      <main className="font-krona text-white bg-background">
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <Services />
        <About />
        <CTA />
        <Footer /> 
        {/* Footer */}
      </main>
    </ReactLenis>
  );
};

export default App;
