import Hero from "./components/Hero";
import About from "./components/About";
import Galleries from "./components/Galleries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <About />
      <Galleries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
