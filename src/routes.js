import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Portifolio from "./pages/Portifolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/portifolio/projects/agenda" element={<Projects />} />
        <Route path="/portifolio/projects/cubos-flix" element={<Projects />} />
        <Route path="/portifolio/projects/financas" element={<Projects />} />
        <Route path="/portifolio/projects/port" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
