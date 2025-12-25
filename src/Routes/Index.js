import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../View/Component/Navbar/Index";
import Signup from "../View/Component/Signup/Index";
import Login from "../View/Component/Login/Index";
import About from "../View/Component/About/Index";
import Services from "../View/Component/Services/Index";
import Theme from "../View/Component/Theme/Index";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
    </BrowserRouter>
  );
}
