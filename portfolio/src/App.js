import Hero from "./components/Hero";
import ShrinkingBackground from "./components/ShrinkingBackground";
import About from "./components/About";
import Galleries from "./components/Galleries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <ShrinkingBackground />
      <About />
      <Galleries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
