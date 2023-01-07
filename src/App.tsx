import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Projects from "./Layout/Projects";
import Questions from "./Layout/Questions";
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
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
