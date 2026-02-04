import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Services from "./pages/services";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import About from "./pages/about";
import Work from "./pages/work";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
