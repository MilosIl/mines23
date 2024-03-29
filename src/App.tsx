import './App.css';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Projects from './Layout/Projects/Projects';
import Footer from './Layout/Footer/Footer';
import Navbar from './Layout/Navbar/Navbar';

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
