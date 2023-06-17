import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
