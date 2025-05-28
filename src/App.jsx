import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import SupportPage from "./Pages/SupportPage";
import Terminal from "./Pages/Terminal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="terminal" element={<Terminal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
