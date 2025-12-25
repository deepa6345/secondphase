import Button from "../Button/Index";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WebTech Practice</div>

      <ul className="nav-links">
        <Button btn="About" to="/about" className="btn" />
        <Button btn="Services" to="/Services" className="btn" />
        <Button btn="Theme" to="/Theme" className="btn" />
        <Button btn="Login" to="/Login" className="btn" />
        <Button btn="Signup" to="/Signup" className="btn1" />
      </ul>
    </nav>
  );
}

export default Navbar;
