import Slide from "../Slide/Index";
import "../../../Style/Component/FullSlide/Style.css";

function HeroSection() {
  return (
    <section style={{ display: "flex", padding: "3rem", gap: "1rem" }}>
      <div className="hero-left">
        <h1>Launch your Web Tech practice site in minutes</h1>
        <p>
          A clean, modern starter template with Login, Signup, Dashboard,
          Profile and Logout pages using only HTML/CSS/JS and browser
          localStorage.
        </p>

        <div className="hero-btns">
          <button className="primary">Sign Up</button>
          <button className="secondary">I already have an account</button>
        </div>
      </div>

      <div className="hero-right">
        <Slide />
      </div>
    </section>
  );
}

export default HeroSection;
