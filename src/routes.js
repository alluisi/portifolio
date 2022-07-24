import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Portifolio from "./pages/Portifolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
