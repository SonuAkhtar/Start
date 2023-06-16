import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
