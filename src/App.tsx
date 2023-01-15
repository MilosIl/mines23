import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Projects from "./Layout/Projects";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";


function App() {
  
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
