import { useNavigate } from "react-router-dom";
import Button from "../Button/Index";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ padding: "10px", display: "flex", gap: "10px" }}>
      <Button onClick={() => navigate("/login")} btn="Login" />
      <Button onClick={() => navigate("/signup")} btn="Signup" />
    </nav>
  );
}

export default Navbar;
