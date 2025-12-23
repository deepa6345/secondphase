import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Services from "../View/Component/Services/Index";

import Navbar from "../View/Component/Navbar/Index";
import Theme from "../View/Component/Theme/Index";
import Signup from "../View/Component/Signup/Index";
import About from "../View/Component/About/Index";
import Login from "../View/Component/Login/Index";
export default function Navigation() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </Router>
  );
}

